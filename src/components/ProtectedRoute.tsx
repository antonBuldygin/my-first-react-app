import React from 'react';
import { Navigate } from 'react-router-dom';
import useSessionTimeout from './useSessionTimeout';

interface ProtectedRouteProps {
    children: React.ReactElement;
}

/*
  Компонент ProtectedRoute защищает маршруты приложения.
  Если в localStorage отсутствует токен, происходит перенаправление на страницу логина.
  Также внутри компонента вызывается хук useSessionTimeout для автоматического выхода по истечении токена.
*/
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    // Если токен отсутствует, перенаправляем на страницу /login
    if (!token) {
        return <Navigate to="/login" replace />;
    }

    // Хук обрабатывает автоматический выход по истечении действия токена
    useSessionTimeout(token);

    return children;
};

export default ProtectedRoute;