import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "courseCategories",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      courseId: {
        type: dataType.UUID,
      },
      categoryId: {
        type: dataType.UUID,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { courseCategories, Courses, categories } = models;
  categories.hasMany(courseCategories, {
    foreignKey: "categoryId",
    as: "categorie",
  });
  courseCategories.belongsTo(categories, {
    foreignKey: "categoryId",
    as: "categorie",
  });
  Courses.hasMany(courseCategories, {
    foreignKey: "courseId",
    as: "courseCategories",
  });
  courseCategories.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "courseCategories",
  });
}
export { init, associate };
