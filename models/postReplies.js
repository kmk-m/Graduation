import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "postReplies",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      commentId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
      },
      reply: {
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
  const { postComments, user, postReplies } = models;
  postComments.hasMany(postReplies, {
    foreignKey: "commentId",
  });
  postReplies.belongsTo(postComments, {
    foreignKey: "commentId",
  });
  user.hasMany(postReplies, {
    foreignKey: "userId",
  });
  postReplies.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
