import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "likes",
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
      like: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      love: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      sad: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      angry: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
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
  const { postComments, likes, post } = models;
  postComments.hasOne(likes, {
    foreignKey: "commentId",
  });
  likes.belongsTo(postComments, {
    foreignKey: "commentId",
  });
  post.hasOne(likes, {
    foreignKey: "postId",
  });
  likes.belongsTo(post, {
    foreignKey: "postId",
  });
}
export { init, associate };
