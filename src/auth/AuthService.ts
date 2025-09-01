import axios from 'axios';

// Интерфейс для типизации ответа сервера (jsonplaceholder возвращает дополнительные поля)
interface LoginResponse {
    id?: number;
    [key: string]: any;
}

// Объект AuthService с методом login
const AuthService = {
    /**
     * Метод login отправляет POST-запрос на фейковый API с email и паролем.
     * @param email - адрес электронной почты пользователя
     * @param password - пароль пользователя
     * @returns Promise c данными ответа сервера
     */
    login: async (email: string, password: string): Promise<LoginResponse> => {
        try {
            // Отправка POST-запроса на тестовый API с данными email и password
            const response = await axios.post(`https://jsonplaceholder.typicode.com/posts/login`, { email, password });
            return response.data; // Сервер должен возвращать JWT
            // Возвращаем данные ответа для дальнейшей обработки

        } catch (error) {
            // Вывод ошибки в консоль и проброс исключения
            return Promise.reject(error);
        }
    }
};

export default AuthService;