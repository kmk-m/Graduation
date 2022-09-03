import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userExperiences",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      link: {
        type: dataType.STRING,
        allowNull: false,
      },
      description: {
        type: dataType.STRING,
        allowNull: false,
      },
      type: {
        type: dataType.ENUM("Volunteer", "Work", "Intership"),
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
  const { user, userExperiences } = models;
  user.hasMany(userExperiences, {
    foreignKey: "userId",
    as: "userExperiences",
  });
  userExperiences.belongsTo(user, {
    foreignKey: "userId",
    as: "userExperiences",
  });
}
export { init, associate };
