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
    }
  );
}
function associate(models) {
  const { postImages, posts } = models;
  posts.hasMany(postImages, {
    foreignKey: "postId",
  });
  postImages.belongsTo(posts, {
    foreignKey: "postId",
  });
}
export { init, associate };
