import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "postFriends",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      postId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
      },
    },
    {
      timeStamp: true,
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { postFriends, user, post } = models;
  post.hasMany(postFriends, {
    foreignKey: "postId",
  });
  postFriends.belongsTo(post, {
    foreignKey: "postId",
  });
  user.hasMany(postFriends, {
    foreignKey: "userId",
  });
  postFriends.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
