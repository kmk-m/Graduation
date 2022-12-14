import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userCourses",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      courseId: {
        type: dataType.UUID,
      },
      status: {
        type: dataType.ENUM("Pending", "Done"),
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { Courses, user, userCourses } = models;
  user.hasMany(userCourses, {
    foreignKey: "userId",
  });
  userCourses.belongsTo(user, {
    foreignKey: "userId",
  });
  Courses.hasMany(userCourses, {
    foreignKey: "courseId",
  });
  userCourses.belongsTo(Courses, {
    foreignKey: "courseId",
  });
}
export { init, associate };
