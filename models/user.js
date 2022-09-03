import dataType from "sequelize";
import { UUIDV4 } from "sequelize";
import connection from "../util/connection";
function init(connection) {
  connection.define("user", {
    userId: {
      type: dataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4(),
    },
    firstName: {
      type: dataType.STRING,
      allowNull: false,
    },
    lastName: {
      type: dataType.STRING,
      allowNull: false,
    },
    email: {
      type: dataType.STRING,
      allowNull: false,
    },
    emailVerified: {
      type: dataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    password: {
      type: dataType.STRING,
      allowNull: false,
    },
    role: {
      type: dataType.ENUM("admin", "user", "author", "worker"),
      allowNull: false,
      defaultValue: "user",
    },
    rating: {
      type: dataType.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    image: {
      type: dataType.STRING,
      allowNull: false,
      defaultValue:
        "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg",
    },
  });
}

export { init };
