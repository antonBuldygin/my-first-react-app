// Тест для проверки страницы задач с использованием Cypress
// Интеграционные тесты компонента DataLoader на Cypress
describe(
    'DataLoader Component',
    () => {
        // Тест для проверки отображения текста "Loading..." при начальной
        // загрузке
        it(
            'should display "Loading..." initially',
            () => {
                // Перехватываем запрос к API и добавляем задержку, чтобы
                // проверить состояние загрузки
                // cy.intercept('http://localhost:3000');
                cy.visit("http://localhost:3000");
                cy.contains("Loading...")
                    .should("be.visible");
                // Сразу после загрузки страницы должен отображаться текст
                // "Loading..."
            }
        );
        // Тест для проверки успешного завершения запроса
        it(
            'should display "Data Loaded" after successful data fetch',
            () => {
                // Перехватываем запрос и возвращаем успешный ответ сразу
                // Ожидаем завершения запроса
                // Проверяем, что после успешного ответа отображается текст
                // "Data Loaded"
                cy.intercept("GET", "http://localhost:3000/api/data"

                ).as("getUsers");

                cy.visit("http://localhost:3000");
                cy.wait("@getUsers"); // Ждём завершения запросов
                cy.contains("DataLoadeddd")
                    .should("be.visible"); // Убеждаемся, что на странице 10 пользователей
            }
        );
        // Тест для проверки обработки ошибки при запросе
        it(
            'should display "Error fetching data" when API call fails',
            () => {
                // Перехватываем запрос и симулируем ошибку сервера (например,
                // статус 500) Ожидаем завершения запроса с ошибкой Проверяем,
                // что отображается сообщение об ошибке
                cy.intercept("GET", "/api/data", {
                    statusCode: 500, // Симулируем серверную ошибку
                }).as("getUsersError");

                cy.visit("/");
                cy.wait("@getUsersError");
                cy.contains("Error").should("be.visible");
            }
        );
    }
);
// describe(
//     'Страница задач (/todos)',
//     () => {
//         it(
//             'Перехватывает запрос к /api/todos и отображает задачи с
// корректными заголовками и чекбоксами', () => { // Перехватываем GET-запрос к
// /api/todos и подменяем ответ на // содержимое фикстуры todo.json
// cy.intercept( 'GET', '/api/todos', {fixture: 'todo.json'} ) .as('getTodos');
// // Переходим на страницу /todos cy.visit('/todos'); // Ждем завершения
// перехваченного запроса cy.wait('@getTodos'); // Проверяем, что отображается
// 2 задачи cy.get('.p-6 space-y-4') .should( 'have.length', 10 ); // Первая
// задача cy.get('.p-6 space-y-4') .first() .should( 'contain.text', 'Task 1'
// ); // П // Вторая задача cy.get('.p-6 space-y-4') .second() .should(
// 'contain.text', 'Task 2' ); // } ); } ); describe('Тестирование API с
// использованием фикстур', () => { it('Загружает данные пользователя из фикстуры', () => { // Перехватываем запросы и подменяем ответ фикстурой cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', { fixture: 'user.json' }).as('getUser');  // Заходим на главную страницу cy.visit('/');  // Проверяем загрузку данных cy.wait('@getUser'); cy.get('[data-testid="username"]').should('contain', 'Иван Иванов'); cy.get('[data-testid="email"]').should('contain', 'ivan.ivanov@example.com'); }); }); Демонстрация корректного использования интерфейса RouteParams describe('Динамический маршрут /user/:id', () => { beforeEach(() => { // Cypress starts out with a blank slate for each test // so we must tell it to visit our website with the `cy.visit()` command. // Since we want to visit the same URL at the start of all our tests, // we include it in our beforeEach function so that it runs before each test cy.visit('http://127.0.0.1:3000/') }) it('должен показывать Главную страницу по маршруту "/"', () => { cy.visit('/'); // открываем маршрут "/" cy.contains('Главная страница'); // проверяем текст }); it('должен показывать страницу Контактов по маршруту "/contact"', () => { cy.visit('/contact'); // открываем маршрут "/contact" cy.contains('Панель управления (Dashboard)'); // проверяем текст });   }); Описание набора тестов для проверки успешного GET-запроса к API describe( 'Проверка успешного API-запроса', () => { // Тест проверяет, что GET-запрос на указанный URL возвращает // корректный ответ it( 'отправляет GET-запрос и проверяет статус, тип и содержимое ответа', () => { // Отправка GET-запроса на URL с постами cy.request( 'GET', 'https://jsonplaceholder.typicode.com/posts' ) .then((res) => { expect(res.status).to.eq(200); expect(res.body) .to .be .an('array'); expect(res.body.length).to.be.greaterThan(0); }) // Проверка: статус ответа должен быть 200 (успешный запрос) // Проверка: тело ответа должно быть массивом // Проверка: массив не должен быть пустым (должен содержать // хотя бы один элемент) } ); } );