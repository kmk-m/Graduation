/*import { Sequelize } from "sequelize";


 const connection = new Sequelize({
   dialect: "mysql",
   host: "us-cdbr-east-06.cleardb.net",
   database: "heroku_e41c1baee36a515",
   username: "b9e60d1985c298",
   password: "3e689dd2",
   logging: false,
 });
 export { connection as default };*/


import { Sequelize } from "sequelize";

const connection = new Sequelize({
  dialect: "mysql",
  host: "127.0.0.1",
  database: "lms",
  username: "root",
  password: "",
  logging: false,
});
export { connection as default };

