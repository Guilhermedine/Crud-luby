export const configDB = {
  dialect: "postgres",
  host: "localhost",
  username: "docker",
  password: "docker",
  database: "Crud-luby",
  define: {
    timestamp: true,
    underscored: true,
  }
}