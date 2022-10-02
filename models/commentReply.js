import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "commentReply",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      commentId: {
        type: dataType.UUID,
      },
      content: {
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
  const { postActivites, commentReply } = models;
  postActivites.hasMany(commentReply, {
    foreignKey: "commentId",
  });
  commentReply.belongsTo(postActivites, {
    foreignKey: "commentId",
  });
}
export { init, associate };
