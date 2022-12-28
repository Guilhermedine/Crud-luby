import { Sequelize } from "sequelize-typescript";


export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'crud',
  define: {
    underscored: true,
    timestamps: true,
  },
});
