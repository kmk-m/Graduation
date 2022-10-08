import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "allMessages",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      usersId: {
        type: dataType.UUID,
        allowNull: false,
      },
      contant: {
        type: dataType.TEXT,
        allowNull: false,
      },
      read: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      sender: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { allMessages, messages } = models;
  messages.hasMany(allMessages, {
    foreignKey: "usersId",
  });
  allMessages.belongsTo(messages, {
    foreignKey: "usersId",
  });
}
export { init, associate };
