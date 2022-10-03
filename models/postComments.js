import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "postComments",
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
      },
      type: {
        type: dataType.ENUM("comment", "reply"),
      },
      comment: {
        type: dataType.TEXT,
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { postComments, user, post } = models;
  postComments.hasMany(postComments, {
    foreignKey: "commentId",
  });
  postComments.belongsTo(postComments, {
    foreignKey: "commentId",
  });
  post.hasMany(postComments, {
    foreignKey: "postId",
  });
  postComments.belongsTo(post, {
    foreignKey: "postId",
  });
  user.hasMany(postComments, {
    foreignKey: "userId",
  });
  postComments.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
