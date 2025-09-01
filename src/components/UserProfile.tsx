// Функциональный компонент UserProfile, отображающий имя и возраст пользователя
import React from 'react';

// Интерфейс для типизации пропсов компонента
interface UserProfileProps {
    name: string; // Имя пользователя
    age: number;  // Возраст пользователя
}

// Функциональный компонент с деструктуризацией пропсов
const UserProfile: React.FC<UserProfileProps> = ({ name, age }) => {
    return (
        <div>
            {/* Рендер строки с подстановкой переданных значений */}
    Имя: {name}, Возраст: {age}
    </div>
);
};

export default UserProfile;