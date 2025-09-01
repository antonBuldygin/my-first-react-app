import React from 'react';

// Интерфейс для пропсов компонента
interface WelcomeMessageProps {
    // Пропс username опциональный, чтобы избежать ошибок при отсутствии значения
    username?: string;
}

// Функциональный компонент WelcomeMessage
const WelcomeMessage: React.FC<WelcomeMessageProps> = ({ username = 'Guest' }) => {
    // Используем значение username, подставляя значение по умолчанию "Guest"
    return <div>Welcome, {username}!</div>;
};

export default WelcomeMessage;