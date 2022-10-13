import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "questionAnswers",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      questionId: {
        type: dataType.UUID,
      },
      answerType: {
        type: dataType.ENUM("Text", "Photo"),
        allowNull: false,
      },
      answerText: {
        type: dataType.STRING,
      },
      answerImage: {
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
  const { questionAnswers, quizQuestions } = models;
  quizQuestions.hasMany(questionAnswers, {
    foreignKey: "questionId",
  });
  questionAnswers.belongsTo(quizQuestions, {
    foreignKey: "questionId",
  });
}
export { init, associate };
