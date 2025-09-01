// Типизация данных, отправляемых на сервер для генерации кода MFA
export interface GenerateMFARequest {
    userId: string; // Идентификатор пользователя
}

// Ответ от сервера после генерации кода
export interface GenerateMFAResponse {
    success: boolean; // Успешно ли сгенерирован код
    message?: string; // Сообщение об ошибке (в случае неудачи)
}

// Типизация данных для подтверждения кода MFA
export interface ConfirmMFARequest {
    userId: string; // Идентификатор пользователя
    code: string;   // Введённый код подтверждения
}

// Ответ от сервера после подтверждения кода
export interface ConfirmMFAResponse {
    success: boolean; // Успешно ли подтверждение
    token?: string;  // JWT-токен в случае успешного подтверждения
    message?: string; // Сообщение об ошибке (при неудаче)
}