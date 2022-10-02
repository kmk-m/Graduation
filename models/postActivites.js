import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "postActivites",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      type: {
        type: dataType.ENUM("like", "love", "angry", "sad", "comment"),
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
  const { user, postActivites } = models;
  user.hasMany(postActivites, {
    foreignKey: "userId",
  });
  postActivites.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
