import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userSubmission",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
        allowNull: false,
      },
      quizId: {
        type: dataType.UUID,
        allowNull: false,
      },
      grade: {
        type: dataType.INTEGER,
        allowNull: false,
      },
    },
    {
      timeStamp: true,
      createdAt: true,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { quiz, userSubmission, user } = models;
  quiz.hasMany(userSubmission, {
    foreignKey: "quizId",
  });
  userSubmission.belongsTo(quiz, {
    foreignKey: "quizId",
  });
  user.hasMany(userSubmission, {
    foreignKey: "userId",
  });
  userSubmission.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
