module.exports = {
    apps : [{
            name: "aww-cms",
            script: "npm",
            args: "start",
            cwd: './aww-cms/',
            env_production: {
                NODE_ENV: "production",
                HOST: "${HOST}",
                PORT: "${PORT_CMS}",
                APP_KEYS: "${APP_KEYS}",
                API_TOKEN_SALT: "${API_TOKEN_SALT}",
                ADMIN_JWT_SECRET: "${ADMIN_JWT_SECRET}",
                JWT_SECRET: "${JWT_SECRET}",
                DATABASE_HOST: "${DATABASE_HOST}",
                DATABASE_PORT: "${DATABASE_PORT}",
                DATABASE_NAME: "${DATABASE_NAME}",
                DATABASE_USERNAME: "${DATABASE_USERNAME}",
                DATABASE_PASSWORD: "${DATABASE_PASSWORD}",
                DATABASE_SCHEMA: "${DATABASE_SCHEMA}"
            },
        },
        {
            name: "aww-frontend",
            script: "npm",
            args: "start",
            cwd: './aww-frontend/',
            env_production: {
                NODE_ENV: "production",
                PORT: "${NEXT_PORT}",
                STRAPI_ADMIN_BACKEND_URL: "${STRAPI_ADMIN_BACKEND_URL}",
                COURIER_TOKEN: "${COURIER_TOKEN}"
            },
        }
    ]
}
