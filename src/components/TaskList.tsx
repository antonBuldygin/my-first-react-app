interface Task {
    id: number;
    title: string;
    completed: boolean;
}

interface TaskListProps {
    tasks: Task[];
}

export default function TaskList({ tasks }: TaskListProps) {
    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.title} - {task.completed ? "Сделано" : "В процессе"}
                </li>
            ))}
        </ul>
    );
}

// Использование компонента
const tasks = [
    { id: 1, title: "Выучить TypeScript", completed: true },
    { id: 2, title: "Написать код", completed: false },
];