import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "post",
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
      timeStamp: true,
    }
  );
}
function associate(models) {
  const { user, post } = models;
  user.hasMany(post, {
    foreignKey: "userId",
  });
  post.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
