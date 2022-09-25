import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.HOST,
  database: "lms",
  username: "root",
  password: process.env.PASSWORD,
  logging: false,
});
export { connection as default };
