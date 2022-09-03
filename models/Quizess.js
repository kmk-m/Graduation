import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "Quizess",
    {
      quizeId: {
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
        allowNull: false,
      },
      details: {
        type: dataType.STRING,
        allowNull: false,
      },
      numberOfQuesstions: {
        type: dataType.TINYINT,
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
  const { Courses, Quizess } = models;
  Courses.hasOne(Quizess, {
    foreignKey: "courseId",
    as: "Quizess",
  });
  Quizess.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "Quizess",
  });
}
export { init, associate };
