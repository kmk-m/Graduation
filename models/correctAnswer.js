import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "correctAnswers",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      questionId: {
        type: dataType.UUID,
        allowNull: false,
      },
      answerId: {
        type: dataType.UUID,
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
  const { questionAnswers, quizQuestions, correctAnswers } = models;
  quizQuestions.hasMany(correctAnswers, {
    foreignKey: "questionId",
  });
  correctAnswers.belongsTo(quizQuestions, {
    foreignKey: "questionId",
  });
  questionAnswers.hasMany(correctAnswers, {
    foreignKey: "answerId",
  });
  correctAnswers.belongsTo(questionAnswers, {
    foreignKey: "answerId",
  });
}
export { init, associate };
