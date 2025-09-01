import React from 'react';
import { useNavigate } from 'react-router-dom';

/*
  Компонент ProtectedPage отображает защищенный контент,
  доступ к которому возможен только при наличии валидного токена.
  Также реализована кнопка для ручного выхода.
*/
const ProtectedPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // При ручном выходе удаляем токен и перенаправляем пользователя на страницу входа
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>Защищённая страница</h2>
            <p>Добро пожаловать! Ваш сеанс активен.</p>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    );
};

export default ProtectedPage;