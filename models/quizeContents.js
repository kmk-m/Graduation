import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "quizeContents",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      quizeId: {
        type: dataType.UUID,
      },
      quistion1: {
        type: dataType.STRING,
      },
      answerQuestion1: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion2: {
        type: dataType.STRING,
      },
      answerQuestion2: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion3: {
        type: dataType.STRING,
      },
      answerQuestion3: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion4: {
        type: dataType.STRING,
      },
      answerQuestion4: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion5: {
        type: dataType.STRING,
      },
      answerQuestion5: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion6: {
        type: dataType.STRING,
      },
      answerQuestion6: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion7: {
        type: dataType.STRING,
      },
      answerQuestion7: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion8: {
        type: dataType.STRING,
      },
      answerQuestion8: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion9: {
        type: dataType.STRING,
      },
      answerQuestion9: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion10: {
        type: dataType.STRING,
      },
      answerQuestion10: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion11: {
        type: dataType.STRING,
      },
      answerQuestion11: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion12: {
        type: dataType.STRING,
      },
      answerQuestion12: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion13: {
        type: dataType.STRING,
      },
      answerQuestion13: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion14: {
        type: dataType.STRING,
      },
      answerQuestion14: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion15: {
        type: dataType.STRING,
      },
      answerQuestion15: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion16: {
        type: dataType.STRING,
      },
      answerQuestion16: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion17: {
        type: dataType.STRING,
      },
      answerQuestion17: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion18: {
        type: dataType.STRING,
      },
      answerQuestion18: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion19: {
        type: dataType.STRING,
      },
      answerQuestion19: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
      quistion20: {
        type: dataType.STRING,
      },
      answerQuestion20: {
        type: dataType.ENUM("a", "b", "c", "d"),
        allowNull: false,
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { Quizess, quizeContents } = models;
  Quizess.hasMany(quizeContents, {
    foreignKey: "quizeId",
    as: "quizeContents",
  });
  quizeContents.belongsTo(Quizess, {
    foreignKey: "quizeId",
    as: "quizeContents",
  });
}
export { init, associate };
