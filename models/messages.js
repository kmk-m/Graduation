import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "messages",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      senderId: {
        type: dataType.UUID,
        allowNull: false,
      },
      receiverId: {
        type: dataType.UUID,
        allowNull: false,
      },
      message: {
        type: dataType.TEXT,
        allowNull: false,
      },
      read: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
      createdAt: true,
    }
  );
}
function associate(models) {
  const { messages, user } = models;
  user.hasMany(messages, {
    foreignKey: "senderId",
  });
  messages.belongsTo(user, {
    foreignKey: "senderId",
  });
  user.hasMany(messages, {
    foreignKey: "receiverId",
  });
  messages.belongsTo(user, {
    foreignKey: "receiverId",
  });
}
export { init, associate };
