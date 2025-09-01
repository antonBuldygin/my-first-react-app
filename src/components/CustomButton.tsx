import React from 'react';

// Интерфейс для пропсов компонента CustomButton
interface CustomButtonProps {
    text: string;          // Текст, отображаемый на кнопке
    onClick: () => void;     // Функция-обработчик клика по кнопке
}

// Функциональный React-компонент, который отображает кнопку с заданным текстом и обработчиком клика
const CustomButton: React.FC<CustomButtonProps> = ({ text, onClick }) => {
    return (
        // При клике на кнопку вызывается функция onClick
        <button onClick={onClick}>{text}</button>
    );
};

export default CustomButton;