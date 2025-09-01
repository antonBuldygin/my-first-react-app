import React from 'react';
import { useParams } from 'react-router-dom';

// Интерфейс для строгой типизации параметров маршрута
type ProductParam ={
    id: string;

}

// Компонент, отображающий информацию о продукте
const ProductPage: React.FC = () => {
    // Получаем параметр "id" из маршрута и типизируем его с помощью интерфейса ProductParams
    const { id } = useParams<ProductParam>();

    // Если параметр отсутствует, можно вывести сообщение об ошибке (опционально)
    if (!id) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div>
            {/* Отображаем информацию о продукте с ID, полученным из маршрута */}
            Информация о продукте с ID: {id}
        </div>
    );
};

export default ProductPage;