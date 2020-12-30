export default {
  client: 'postgresql',
  debug: true,
  connection: {
    database: 'test',
    user: process.env.DATABASE_USERNAME,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'migrations',
    directory: '../migrations',
    loadExtensions: ['.js']
  },
  seeds: {
    directory: '../migrations/seed'
  }
};
