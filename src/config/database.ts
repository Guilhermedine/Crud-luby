import { Sequelize } from "sequelize-typescript";


export const sequelize = new Sequelize({
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'crud',
  dialect: 'postgres',
  logging: false,
  define: {
    underscored: true,
    timestamps: true,
    },
});
