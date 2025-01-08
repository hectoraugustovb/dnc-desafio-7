module.exports = {
  client: 'mysql2',
  connection: {
    host: 'localhost',
    port: 3306,
    user: 'sqldb',
    password: 'sqldb',
    database: 'mysql',
  },
  migrations: {
    directory: './src/database/migrations',
  },
};