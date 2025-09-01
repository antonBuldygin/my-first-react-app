// Импортируем axios для выполнения HTTP-запросов
import axios from 'axios';

// Определяем интерфейс для задачи
export interface Task {
    // id может быть как строкой, так и числом
id: number|string;
}

// Интерфейс для входных данных создания задачи
export interface CreateTaskInput {
    title:string;
    description:string;
}


/**
 * Функция createTask отправляет POST-запрос для создания новой задачи.
 * @param input – объект содержащий title и description задачи
 * @returns Promise<Task> – возвращает созданную задачу, полученную с сервера
 */
export async function createTask(input: CreateTaskInput): Promise<Task> {
    // Отправляем запрос на API
    const response = await axios.post<Task>('/api/tasks', input);
    // Возвращаем данные, полученные от сервера
    return response.data;
}