export const db ={
    development: {
        username: 'root',
        password: '',
        database: 'chat-app',
        host: 'localhost',
        dialect: 'mysql',
    },
    test: {
        username: 'root',
        password: '',
        database: 'test-chat',
        host: 'localhost',
        dialect: 'mysql',
    },
    production: {
        // Similar configuration for your production environment
    },
};
