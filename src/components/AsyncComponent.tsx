import React, { useState, useEffect } from 'react';

// Компонент для имитации асинхронной загрузки данных
const AsyncComponent: React.FC = () => {
    // Состояние для хранения данных: null - данные не загружены, строка - данные загружены
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        // Имитация задержки загрузки данных с помощью setTimeout
        const timer = setTimeout(() => {
            setData('Fetched Data');
        }, 500); // задержка в 500 мс

        // Очистка таймера при размонтировании компонента
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {data === null ? 'Loading...' : data}
        </div>
    );
};

export default AsyncComponent;