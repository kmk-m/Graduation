import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "courseContent",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      courseId: {
        type: dataType.UUID,
        allowNull: false,
      },
      type: {
        type: dataType.ENUM("file", "video"),
        allowNull: false,
      },
      link: {
        type: dataType.STRING,
        allowNull: false,
      },
      place: {
        type: dataType.TINYINT,
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
  const { Courses, courseContent } = models;
  Courses.hasOne(courseContent, {
    foreignKey: "courseId",
    as: "courseContent",
  });
  courseContent.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "courseContent",
  });
}
export { init, associate };
