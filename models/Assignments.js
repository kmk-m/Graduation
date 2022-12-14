import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "Assignments",
    {
      assignmentId: {
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
        type: dataType.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Courses, Assignments } = models;
  Courses.hasMany(Assignments, {
    foreignKey: "courseId",
    as: "courseAssignmments",
  });
  Assignments.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "courseAssignmments",
  });
}
export { init, associate };
