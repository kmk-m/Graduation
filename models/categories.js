import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "categories",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      image: {
        type: dataType.TEXT,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}

export { init };
