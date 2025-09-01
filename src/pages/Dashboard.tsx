import React from 'react'
import { useNavigate } from 'react-router-dom'

// Компонент защищённого раздела Dashboard
const Dashboard: React.FC = () => {
    const navigate = useNavigate()

    // Функция для выхода из системы: удаляет JWT и переключает на страницу логина
    const handleLogout = () => {
        localStorage.removeItem('jwt')
        navigate('/login')
    }

    return (
        <div>
            <h1>Панель управления (Dashboard)</h1>
            <p>Добро пожаловать в защищённый раздел!</p>
            <button onClick={handleLogout}>Выйти</button>
        </div>
    )
}

export default Dashboard