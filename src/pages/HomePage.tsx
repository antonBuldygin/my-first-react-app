import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import {CreateTaskInput, Task} from "../tasks";


// Компонент главной страницы
const HomePage: React.FC = () => {


            // Выполняем GET-запрос к API для получения списка постов
         async function createTask(): Promise<Task> {
             // Отправляем запрос на API
             const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
             // Возвращаем данные, полученные от сервера
             return response.data;
         }

         createTask();

        // Очистка таймера при размонтировании компонента


    return (
        <div>
            <h1>Главная страница</h1>
            <p>Добро пожаловать в наше одностраничное приложение!</p>
            {/* Ссылка для перехода на страницу новостей */}
            <Link to="/about">Перейти к новостям</Link>
        </div>
    );
};

export default HomePage;