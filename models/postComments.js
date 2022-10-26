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
      userId: {
        type: dataType.UUID,
      },
      comment: {
        type: dataType.TEXT,
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
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { postComments, user, post } = models;
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
