import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Определяем интерфейс для структуры поста
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Функция для загрузки постов с API
const fetchPosts = async (): Promise<Post[]> => {
    // Отправляем GET-запрос к API и возвращаем данные
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return response.data;
};

const App: React.FC = () => {
    // Состояние для хранения значения фильтра (фильтр по заголовку)
    const [filter, setFilter] = useState<string>('');

    // Используем хук useQuery для загрузки постов с сервера
    // Ключ запроса "posts" используется для кэширования результатов
    const { data, isLoading, error } = useQuery<Post[], Error>({
        queryKey: ['posts'],
        queryFn: fetchPosts
    });

    // Обработчик изменения поля ввода для обновления фильтра в реальном времени
    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(event.target.value);
    };

    // Фильтруем загруженные посты по условию наличия введенной подстроки в заголовке
    const filteredPosts = data?.filter(post =>
        post.title.toLowerCase().includes(filter.toLowerCase())
    ) || [];

    // Если данные загружаются, отображаем индикатор загрузки
    if (isLoading) {
        return <div>Загрузка...</div>;
    }

    // Если произошла ошибка при загрузке, отображаем сообщение об ошибке
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    // Рендерим текстовое поле фильтрации и список отфильтрованных постов
    return (
        <div style={{ padding: '20px' }}>
            <h1>Список постов</h1>
            {/* Поле ввода для фильтрации по заголовку */}
            <input
                type="text"
                placeholder="Фильтр по заголовку"
                value={filter}
                onChange={handleFilterChange}
                style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
            />
            <ul>
                {/* Отображаем каждый пост в виде элемента списка */}
                {filteredPosts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;