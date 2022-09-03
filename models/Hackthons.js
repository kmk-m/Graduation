import dataType from "sequelize";
import connection from "../util/connection";
import { UUIDV4 } from "sequelize";

async function init(connection) {
  connection.define(
    "Hackathons",
    {
      hackthonId: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      type: {
        type: dataType.ENUM(
          "flutter",
          "frontend",
          "backend",
          "fullstack",
          "machine learning",
          "deep Learning",
          "data Analysis",
          "Cyper Security"
        ),
        allowNull: false,
      },
      date: {
        type: dataType.DATE,
        allowNull: false,
      },
      round: {
        type: dataType.BIGINT,
        allowNull: false,
      },
      finished: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
export { init };
