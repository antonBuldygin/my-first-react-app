import React from 'react';
import { useAuth } from './AuthContext';

// Компонент для демонстрации текущей роли пользователя.
// Он получает данные авторизации из контекста и выводит роль на экран.
const RoleDisplay: React.FC = () => {
    const { currentUser } = useAuth();



    return (
        <div>
            <p>Текущая роль пользователя: {currentUser?.role}</p>
        </div>
    );
};

export default RoleDisplay;