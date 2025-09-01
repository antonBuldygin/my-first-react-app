import React from 'react';

// Интерфейс для пропсов компонента MyButton
export interface MyButtonProps {
    onClick: () => void; // Функция, которая вызывается при клике на кнопку
}

// Функциональный компонент, отображающий кнопку с текстом "Click me"
const MyButton: React.FC<MyButtonProps> = ({ onClick }) => {
    return (
        // При клике вызывается переданная функция onClick
        <button onClick={onClick}>
            Click me
        </button>
    );
};

export default MyButton;