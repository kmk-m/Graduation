import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userPosts",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      postId: {
        type: dataType.UUID,
      },
      commentId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
        allowNull: false,
      },
      type: {
        type: dataType.ENUM("like", "love", "sad", "angry"),
        allowNull: false,
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
  const { userPosts, user, post, postComments } = models;
  post.hasMany(userPosts, {
    foreignKey: "postId",
  });
  userPosts.belongsTo(post, {
    foreignKey: "postId",
  });
  user.hasMany(userPosts, {
    foreignKey: "userId",
  });
  userPosts.belongsTo(user, {
    foreignKey: "userId",
  });
  postComments.hasMany(userPosts, {
    foreignKey: "commentId",
  });
  userPosts.belongsTo(postComments, {
    foreignKey: "commentId",
  });
}
export { init, associate };
