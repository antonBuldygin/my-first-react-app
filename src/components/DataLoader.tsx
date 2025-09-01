// Компонент DataLoader осуществляет запрос к API и отображает состояние загрузки,
// успешного получения данных или ошибки.

import React, { useState, useEffect } from 'react';

// Определяем типы состояний загрузки
type LoadingStatus = 'loading' | 'success' | 'error';

const DataLoader: React.FC = () => {
    // Изначально состояние установлено в "loading"
    const [status, setStatus] = useState<LoadingStatus>('loading');

    useEffect(() => {
        // Выполняем запрос к API при монтировании компонента
        fetch('/api/data')
            .then(response => {
                if (response.ok) {
                    // Если статус ответа 200-299, устанавливаем состояние в "success"
                    setTimeout(() => { setStatus('success')},2000);
                } else {
                    // Если сервер вернул ошибку, устанавливаем состояние в "error"
                    setStatus('error');
                }
            })
            .catch(() => {
                // При возникновении ошибки (например, сети) также устанавливаем "error"
                setStatus('error');
            });
    }, []);

    // Рендерим различные тексты в зависимости от состояния
    if (status === 'loading') {
        return <div>Loading...</div>;
    } else if (status === 'success') {
        return <div>DataLoadeddd</div>;


    } else {
        return <div>Error fetching data</div>;
    }
};

export default DataLoader;