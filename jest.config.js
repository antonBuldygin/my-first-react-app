module.exports = {
    preset: "ts-jest", // Используем ts-jest для работы с TypeScript
    testEnvironment: "jsdom", // Симулируем браузерное окружение для тестов
    moduleNameMapper: {
        '\\.(css|scss)$': 'identity-obj-proxy', // Мокаем CSS-модули
        testEnvironment: 'jest-fixed-jsdom',
        testEnvironmentOptions: {
            customExportConditions: [''],
        },
    },
    setupFilesAfterEnv: [
        "<rootDir>/src/setupTests.ts" // Настраиваем тестовую среду
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80,
        },
    },

};