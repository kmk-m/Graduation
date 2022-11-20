import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "quiz",
    {
      id: {
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
      },
      trackId: {
        type: dataType.UUID,
      },
      Time: {
        type: dataType.STRING,
        allowNull: false,
      },
      type: {
        type: dataType.ENUM("Quiz", "Exam"),
        allowNull: false,
      },
      numberOfQuestions: {
        type: dataType.INTEGER,
        defaultValue: 0,
        allowNull: false,
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
  const { Courses, quiz, Tracks } = models;
  Courses.hasMany(quiz, {
    foreignKey: "courseId",
    as: "quiz",
  });
  quiz.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "quiz",
  });
  Tracks.hasOne(quiz, {
    foreignKey: "trackId",
    as: "Trackss",
  });
  quiz.belongsTo(Tracks, {
    foreignKey: "trackId",
    as: "Trackss",
  });
}
export { init, associate };
