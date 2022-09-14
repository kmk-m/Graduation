import { Sequelize } from "sequelize";
import SetupModels from "../models/setupmodels";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  database: "lms",
  username: "root",
  password: "",
  logging: false,
});
export { connection as default };
