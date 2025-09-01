import React, { useState, useEffect } from 'react';

// Компонент UserList отображает список пользователей.
// Пока данные загружаются (имитируется через setTimeout), выводится сообщение "Загрузка..."
const UserList: React.FC = () => {
    // Состояние загрузки данных
    const [loading, setLoading] = useState(true);
    // Состояние для имитации полученных данных (список пользователей)
    const [users, setUsers] = useState<string[]>([]);

    // Имитация запроса данных с задержкой
    useEffect(() => {
        // Задержка для имитации асинхронного запроса
        const timer = setTimeout(() => {
            // Пример данных, которые могут быть получены после запроса
            setUsers(['User 1', 'User 2', 'User 3']);
            setLoading(false);
        }, 1000);

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    // Если данные еще загружаются, отображаем индикатор загрузки
    if (loading) {
        return <div data-testid="loading">Загрузка...</div>;
    }

    // После загрузки данных отображается список пользователей
    return (
        <ul>
            {users.map(user => (
                <li key={user}>{user}</li>
            ))}
        </ul>
    );
};

export default UserList;