import React, {JSX} from 'react';
import { Navigate } from 'react-router-dom';

// Интерфейс для пропсов компонента AuthGuard
export interface AuthGuardProps {
    children: JSX.Element;
    isAuthenticated: boolean;
}

// Компонент AuthGuard для защиты маршрутов
const AuthGuard: React.FC<AuthGuardProps> = ({ isAuthenticated, children }) => {
    // Если пользователь не авторизован, перенаправляем на страницу /login
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }
    // Если авторизован, отображаем дочерние компоненты
    return children;
};

export default AuthGuard;