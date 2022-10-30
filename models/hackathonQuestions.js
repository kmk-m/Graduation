import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "hackathonQuestions",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      hackthonId: {
        type: dataType.UUID,
      },
      question: {
        type: dataType.STRING,
        allowNull: false,
      },
      answer: {
        type: dataType.STRING,
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
  const { Hackathons, user, hackathonQuestions } = models;
  user.hasMany(hackathonQuestions, {
    foreignKey: "userId",
  });
  hackathonQuestions.belongsTo(user, {
    foreignKey: "userId",
  });
  Hackathons.hasMany(hackathonQuestions, {
    foreignKey: "hackthonId",
  });
  hackathonQuestions.belongsTo(Hackathons, {
    foreignKey: "hackthonId",
  });
}
export { init, associate };
