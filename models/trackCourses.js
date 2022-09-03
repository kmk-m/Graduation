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
    as: "Courses",
  });
  trackCourses.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "Courses",
  });
  Tracks.hasMany(trackCourses, {
    foreignKey: "trackId",
    as: "Tracks",
  });
  trackCourses.belongsTo(Tracks, {
    foreignKey: "trackId",
    as: "Tracks",
  });
}
export { init, associate };
