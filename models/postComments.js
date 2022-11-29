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
      image: {
        type: dataType.STRING,
      },
      upVote: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      createdAt: false,
    }
  );
}
function associate(models) {
  const { postComments, user, posts } = models;
  posts.hasMany(postComments, {
    foreignKey: "postId",
  });
  postComments.belongsTo(posts, {
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
