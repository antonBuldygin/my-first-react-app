import React from 'react';
import { useNavigate } from 'react-router-dom';

/*
  Функция generateToken имитирует генерацию JWT токена.
  Для упрощения реализована генерация токена с зашитым временем истечения (exp).
  В действительности сервер будет выдавать корректный JWT.
*/
function generateToken(durationSeconds: number): string {
    const header = {
        alg: 'HS256',
        typ: 'JWT'
    };
    const payload = {
        // Время истечения токена в секундах (текущее время + durationSeconds)
        exp: Math.floor(Date.now() / 1000) + durationSeconds
    };

    // Функция для кодирования объекта в base64
    const base64Encode = (obj: object): string => {
        return btoa(JSON.stringify(obj));
    };

    // Формируем строку токена в формате: header.payload.signature
    return `${base64Encode(header)}.${base64Encode(payload)}.signature`;
}

/*
  Компонент LoginPage реализует страницу входа.
  При нажатии на кнопку "Войти" генерируется токен (сроком действия 30 секунд),
  сохраняется в localStorage и происходит перенаправление на защищённый маршрут.
*/
const LoginPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Генерируем токен с временем жизни 30 секунд
        const token = generateToken(30);
        localStorage.setItem('token', token);
        // Перенаправляем пользователя на защищенную страницу
        navigate('/');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Страница входа</h2>
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};

export default LoginPage;