describe('Стартовая страница', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('http://127.0.0.1:3000/')
    })
    it('Должна загрузиться и показывать заголовок', () => {
        // Перейти на главную страницу нашего приложения
        cy.visit('http://127.0.0.1:3000/');

        // Проверить, что заголовок с текстом "Добро пожаловать!" существует
        cy.get('h1').contains('Тестирование асинхронного компонента').should('be.visible');

        // Убедиться, что кнопка перехода существует
        // cy.get('button').contains('Перейти дальше').should('be.visible');
    });
});