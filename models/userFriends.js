import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userFriends",
    {
      userId: {
        type: dataType.UUID,
      },
      friendId: {
        type: dataType.UUID,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { user, userFriends } = models;
  user.hasMany(userFriends, {
    foreignKey: "userId",
  });
  userFriends.belongsTo(user, {
    foreignKey: "userId",
  });
  user.hasMany(userFriends, {
    foreignKey: "friendId",
  });
  userFriends.belongsTo(user, {
    foreignKey: "friendId",
  });
}
export { init, associate };
