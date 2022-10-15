import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userRates",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      courseId: {
        type: dataType.UUID,
      },
      trackId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
        allowNull: false,
      },
      rate: {
        type: dataType.ENUM("Star1", "Star2", "Star3", "Star4", "Star5"),
        allowNull: false,
      },
      title: {
        type: dataType.STRING,
        allowNull: false,
      },
      details: {
        type: dataType.TEXT,
      },
    },
    {
      timeStamp: true,
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Tracks, user, Courses, userRates } = models;
  Courses.hasMany(userRates, {
    foreignKey: "courseId",
  });
  userRates.belongsTo(Courses, {
    foreignKey: "courseId",
  });
  user.hasMany(userRates, {
    foreignKey: "userId",
  });
  userRates.belongsTo(user, {
    foreignKey: "userId",
  });
  Tracks.hasMany(userRates, {
    foreignKey: "trackId",
  });
  userRates.belongsTo(Tracks, {
    foreignKey: "trackId",
  });
}
export { init, associate };
