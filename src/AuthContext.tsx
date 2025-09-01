import React, { createContext, useContext, useState, ReactNode } from 'react';

// Интерфейс для хранения данных пользователя.
// Роль может быть 'admin' или 'user'.
export interface User {
    role: 'admin' | 'user';
}

// Интерфейс для контекста авторизации.
// В него включены как данные текущего пользователя, так и функция для их обновления.
export interface AuthContextType {
    currentUser: User | null;
    setCurrentUser: (user: User) => void;
}

// Создание контекста авторизации. Изначально-undefined, чтобы обеспечить его обязательную инициализацию в провайдере.
const AuthContext = createContext<AuthContextType | undefined>(undefined);;

// Интерфейс для пропсов компонента AuthProvider.
interface AuthProviderProps {
    children: ReactNode;
}

// Компонент AuthProvider предоставляет данные авторизации через React Context API.
// Здесь хранится состояние текущего пользователя, по умолчанию с ролью 'user'.
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {

    const [currentUser, setCurrentUser] = useState<User >({role:'user'});

    const value: AuthContextType = {
        currentUser,
        setCurrentUser,
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );


};

// Пользовательский хук для удобного доступа к AuthContext.
// Генерирует ошибку, если хук используется за пределами AuthProvider.
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth должен использоваться внутри AuthProvider');
    }
    return context;

};