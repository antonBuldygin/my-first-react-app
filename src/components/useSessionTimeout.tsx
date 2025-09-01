import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

/*
  Функция для разборки (декодирования) JWT токена.
  JWT имеет формат "header.payload.signature". Функция извлекает и декодирует payload.
*/
function parseJwt(token: string): { exp?: number } | null {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        // Декодирование base64 строки в JSON
        const jsonPayload = decodeURIComponent(
            atob(base64)
                .split('')
                .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
                .join('')
        );
        return JSON.parse(jsonPayload);
    } catch (error) {
        // Если токен невалидный, возвращаем null
        console.error('Ошибка при разборе токена:', error);
        return null;
    }
}

/*
  Хук useSessionTimeout принимает JWT токен и устанавливает
  таймер, который при истечении времени действия токена удаляет токен из localStorage
  и перенаправляет пользователя на страницу "/login".
*/
function useSessionTimeout(token: string): void {
    const navigate = useNavigate();

    useEffect(() => {
        // Если токена нет, ничего не делаем
        if (!token) return;


        let payload = parseJwt(token);
        // Если не удалось распарсить токен или отсутствует время истечения, выполняем выход
        let exp = 0;
        if (payload == null) {
            exp = 0
        } else if (payload.exp == null) {
            exp = 0;
        } else {
            exp = payload.exp;
        }

        // Вычисляем оставшееся время до истечения токена
        const expiryTime = exp * 1000; // преобразуем секунды в миллисекунды
        const currentTime = Date.now();
        const timeout = expiryTime - currentTime;

        // Если токен уже истёк, производим немедленный выход
        if (timeout <= 0) {
            return
        }

        // Устанавливаем таймер на оставшееся время до истечения сеанса
        const timerId = setTimeout(() => {
            // По истечении времени очищаем токен и перенаправляем на страницу логина
            localStorage.removeItem("token");
            navigate("/login");
        }, timeout);

        // Очистка таймера при размонтировании или изменении токена
        return () => clearTimeout(timerId);
    }, [token, navigate]);
}

export default useSessionTimeout;