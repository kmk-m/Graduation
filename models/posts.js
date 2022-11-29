import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "posts",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      content: {
        type: dataType.TEXT,
        allowNull: false,
      },
      link: {
        type: dataType.TEXT,
        allowNull: false,
      },
      upVote: {
        type: dataType.BIGINT,
        allowNull: false,
        defaultValue: 0,
      },
      userId: {
        type: dataType.UUID,
      },
      video: {
        type: dataType.STRING,
        allowNull: true,
      },
    },
    {
      createdAt: true,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { user, posts } = models;
  user.hasMany(posts, {
    foreignKey: "userId",
  });
  posts.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
