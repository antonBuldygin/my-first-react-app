import {useState, useEffect} from 'react';

// Кастомный хук для проверки статуса авторизации
export function useAuth(): boolean {
    // Используем useState для хранения статуса авторизации
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        // Функция для проверки наличия токена в localStorage
        const checkAuthStatus = () => {
            let token = localStorage.getItem("jwtToken");
            // Если токен существует, устанавливаем isLoggedIn в true, иначе в false
            if (token) {
                setIsLoggedIn(true);
            }
        };

        // Проверяем статус авторизации при монтировании компонента
        checkAuthStatus();

        // Добавляем слушатель для обновления статуса при изменении localStorage
        window.addEventListener('storage', checkAuthStatus);

        // Удаляем слушатель при размонтировании компонента
        return () => {
            window.removeEventListener('storage', checkAuthStatus);
        };

    }, []); // Пустой массив зависимостей, чтобы эффект выполнялся только при монтировании

    return isLoggedIn;
}