import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "post",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      content: {
        type: dataType.TEXT,
        allowNull: false,
      },
      link: {
        type: dataType.TEXT,
        allowNull: false,
      },
      upVote: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      downVote: {
        type: dataType.BIGINT,
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
