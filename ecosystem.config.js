module.exports = {
    apps : [{
        name   : "aww-cms",
        script : "npm",
        args : "start",
        cwd: './aww-cms/',
        env_production: {
            NODE_ENV: "production",
            HOST: "0.0.0.0",
            PORT: "2337",
            APP_KEYS: 'djsvWRbrZNm8F6Xu,VAfedXGquKjs4pY3',
            API_TOKEN_SALT: 'myN8LHqz7re5GY6b',
            ADMIN_JWT_SECRET: 'HqFcuVZ29aBE7QLm',
            JWT_SECRET: 'qZKzS925mwYBPXVD',
            DATABASE_HOST: 'localhost',
            DATABASE_PORT: '6432',
            DATABASE_NAME: 'aww',
            DATABASE_USERNAME: 'postgres',
            DATABASE_PASSWORD: 'postgrespw',
            DATABASE_SCHEMA: 'public',
        },
    },{
        name   : "aww-frontend",
        script : "npm",
        args : "start",
        cwd: './aww-frontend/',
        env_production: {
            NODE_ENV: "production",
            PORT: "3333",
            STRAPI_ADMIN_BACKEND_URL: "http://localhost:2337/api",
            COURIER_TOKEN: "pk_prod_G3YNWTF6RTMZT7QBSHGB650WTJYC",
        },
    }]
}
