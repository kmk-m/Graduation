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
      replyId: {
        type: dataType.UUID,
      },
      commentId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
        allowNull: false,
      },
      upvote: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { userPosts, user, posts, postComments, postReplies } = models;
  posts.hasOne(userPosts, {
    foreignKey: "postId",
  });
  userPosts.belongsTo(posts, {
    foreignKey: "postId",
  });
  postReplies.hasOne(userPosts, {
    foreignKey: "replyId",
  });
  userPosts.belongsTo(postReplies, {
    foreignKey: "replyId",
  });
  user.hasOne(userPosts, {
    foreignKey: "userId",
  });
  userPosts.belongsTo(user, {
    foreignKey: "userId",
  });
  postComments.hasOne(userPosts, {
    foreignKey: "commentId",
  });
  userPosts.belongsTo(postComments, {
    foreignKey: "commentId",
  });
}
export { init, associate };
