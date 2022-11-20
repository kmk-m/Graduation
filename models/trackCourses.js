import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "trackCourses",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      trackId: {
        type: dataType.UUID,
        allowNull: false,
      },
      courseId: {
        type: dataType.UUID,
        allowNull: false,
      },
      show: {
        type: dataType.STRING,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Courses, Tracks, trackCourses } = models;
  Courses.hasMany(trackCourses, {
    foreignKey: "courseId",
  });
  trackCourses.belongsTo(Courses, {
    foreignKey: "courseId",
  });
  Tracks.hasMany(trackCourses, {
    foreignKey: "trackId",
  });
  trackCourses.belongsTo(Tracks, {
    foreignKey: "trackId",
  });
}
export { init, associate };
