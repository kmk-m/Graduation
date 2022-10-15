import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "quizQuestions",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      quizId: {
        type: dataType.UUID,
      },
      questionType: {
        type: dataType.ENUM("Text", "TextAndPhoto"),
        allowNull: false,
      },
      questionText: {
        type: dataType.STRING,
        allowNull: false,
      },
      questionImage: {
        type: dataType.TEXT,
      },
      questionGrade: {
        type: dataType.INTEGER,
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
  const { quiz, quizQuestions } = models;
  quiz.hasMany(quizQuestions, {
    foreignKey: "quizId",
  });
  quizQuestions.belongsTo(quiz, {
    foreignKey: "quizId",
  });
}
export { init, associate };
