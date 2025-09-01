import {useQuery} from '@tanstack/react-query';
import axios from "axios";

// Интерфейс для типизации объекта поста
export interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

// Создаем пользовательский хук useFetchPosts для получения списка постов
const useFetchPosts = () => {
    return useQuery<Post[], Error>({
        queryKey: ['posts'], // Ключ для идентификации запроса в кэше
        queryFn: async () => {
            // Выполняем GET-запрос к API для получения списка постов
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
                // Если статус ответа не OK, выбрасываем ошибку
                throw new Error('Ошибка загрузки постов');
            }
            return response.json();
        },

        staleTime: 10000, // Настраиваем время устаревания данных: 10 секунд (10000 мс)

    });
};

export default useFetchPosts;