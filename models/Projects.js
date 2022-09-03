import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "Projects",
    {
      projectId: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      courseId: {
        type: dataType.UUID,
        allowNull: false,
      },
      details: {
        type: dataType.STRING,
        allowNull: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Courses, Projects } = models;
  Courses.hasOne(Projects, {
    foreignKey: "courseId",
    as: "Projects",
  });
  Projects.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "Projects",
  });
}
export { init, associate };
