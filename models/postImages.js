import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "postImages",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      link: {
        type: dataType.TEXT,
        allowNull: false,
      },
      postId: {
        type: dataType.UUID(),
      },
    },
    {
      createdAt: false,
      updatedAt: false,
      timeStamp: true,
    }
  );
}
function associate(models) {
  const { postImages, post } = models;
  post.hasMany(postImages, {
    foreignKey: "postId",
  });
  postImages.belongsTo(post, {
    foreignKey: "postId",
  });
  postImages.hasMany(post, {
    foreignKey: "id",
  });
  post.belongsTo(postImages, {
    foreignKey: "id",
  });
}
export { init, associate };
