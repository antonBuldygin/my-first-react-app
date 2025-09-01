import React, { useEffect, useState } from 'react';

// Интерфейс для описания структуры поста
interface Post {
    id: number;
    title: string;
}

const PostList: React.FC = () => {
    // Состояние для хранения списка постов
    const [posts, setPosts] = useState<Post[]>([]);
    // Состояние для отслеживания процесса загрузки
    const [loading, setLoading] = useState<boolean>(true);
    // Состояние для хранения ошибки, если она возникла
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Функция для выполнения запроса к API и получения данных
        const fetchPosts = async () => {
            try {
                // Выполнение запроса с нужным URL
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('Ошибка при запросе данных');
                }
                // Преобразование ответа в JSON
                const data: Post[] = await response.json();
                // Обновление состояния с полученными данными
                setPosts(data);
            } catch (err: unknown) {
                // Обработка ошибки запроса
                setError((err as Error).message);
            } finally {
                // Завершаем процесс загрузки
                setLoading(false);
            }
        };

        fetchPosts();
    }, []); // Эффект срабатывает один раз после монтирования компонента

    if (loading) {
        return <div>Загрузка...</div>;
    }

    if (error) {
        return <div>Ошибка: {error}</div>;
    }

    // Отображение списка заголовков постов
    return (
        <ul>
            {posts.map((post) => (
                // Ключом является уникальный id поста
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
};

export default PostList;