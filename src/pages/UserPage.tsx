import React from 'react';
import { useParams } from 'react-router-dom';
import { RouteParams } from '../RouteParams';

// Компонент страницы, отображающий информацию о пользователе по id
const UserPage: React.FC = () => {
    // Извлекаем параметры маршрута (значения по умолчанию приходят как строки)
    const params = useParams();

    // Приводим полученное значение id к числу и типизируем его с помощью интерфейса RouteParams
    const routeParams: RouteParams = {
        id: Number(params.id)
    };

    return <h1>ddsdsdds<div className='user-profile'>User ID: {routeParams.id}</div></h1>;
};

export default UserPage;