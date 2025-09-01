import React from 'react';
import { Link, Outlet } from 'react-router-dom';

// Компонент страницы новостей, содержащий вложенные маршруты
const NewsPage: React.FC = () => {
    return (
        <div>
            <h1>Новости</h1>
            {/* Навигация для вложенных маршрутов */}
            <nav style={{ marginBottom: '1rem' }}>
                <Link to="local">Местные новости</Link> |{' '}
                <Link to="international">Международные новости</Link>
            </nav>
            {/* Здесь отобразятся вложенные компоненты */}
            <Outlet />
        </div>
    );
};

export default NewsPage;