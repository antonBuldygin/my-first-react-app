import React from 'react';
import { Navigate } from 'react-router-dom';

// Интерфейс для пропсов страницы входа
interface LoginProps {
    onLogin: () => void; // Функция для авторизации пользователя
    isAuthenticated: boolean;
}

const Login: React.FC<LoginProps> = ({ onLogin,  isAuthenticated }) => {
    // Если пользователь уже авторизован, перенаправляем его на /dashboard
    if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
    }
    onLogin =()=>isAuthenticated=true;

    return (
        <div>
            <h2>Страница входа</h2>
            {/* Кнопка для авторизации: при нажатии вызывается функция, которая устанавливает isAuthenticated в true */}
            <button onClick={onLogin}>Войти</button>
        </div>
    );
};

export default Login;