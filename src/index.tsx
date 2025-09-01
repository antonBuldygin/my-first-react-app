import React from 'react';
import ReactDOM from 'react-dom/client';
// Импорт QueryClient и провайдера из React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from './App';

// Создаем экземпляр QueryClient для управления кэшем и запросами
const queryClient = new QueryClient();

// Получаем элемент для рендеринга приложения
const root = ReactDOM.createRoot(document.getElementById('root')!);

// Рендерим приложение, оборачивая его в QueryClientProvider
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
    </React.StrictMode>
);