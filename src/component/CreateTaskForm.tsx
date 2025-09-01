import React, { useState, FormEvent } from 'react';
import { useMutation } from '@tanstack/react-query';
import { createTask, CreateTaskInput, Task } from '../tasks';

const CreateTaskForm: React.FC = () => {
    // Локальное состояние для хранения значений полей формы
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    // Создаем мутацию с типизацией, где:
    // Task – возвращаемый тип, Error – тип ошибки, CreateTaskInput – тип входных данных
   const mutation=  useMutation<Task, Error, CreateTaskInput>({
            mutationFn: createTask,
        });


    /**
     * Обработчик отправки формы.
     * Вызывает мутацию для создания новой задачи.
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Предотвращаем стандартное поведение формы

        // Вызываем мутацию с данными, переданными из формы

mutation.mutate({title,description});
        // Опционально можно сбросить поля формы после отправки
        setTitle('');
        setDescription('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="title" style={{ display: 'block' }}>
                        Заголовок:
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        // Обязательное поле ввода
                        required
                    />
                </div>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="description" style={{ display: 'block' }}>
                        Описание:
                    </label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        // Обязательное поле ввода
                        required
                    />
                </div>
                <button type="submit">Добавить задачу</button>
            </form>

            <div style={{ marginTop: '20px' }}>
                {/* Обработка состояний мутации */}
                {mutation.isPending && (
                    // Если запрос в процессе выполнения - отображаем индикатор загрузки
                    <p>Загрузка...</p>
                )}

                {mutation.isError && (
                    // Если произошла ошибка - отображаем сообщение об ошибке
                    <p style={{ color: 'red' }}>
                        Произошла ошибка при добавлении задачи: {mutation.error.message}
                    </p>
                )}

                {mutation.isSuccess && (
                    // Если запрос завершился успешно - показываем сообщение об успехе
                    <p style={{ color: 'green' }}>Задача добавлена успешно!</p>
                )}
            </div>
        </div>
    );
};

export default CreateTaskForm;