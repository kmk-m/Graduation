import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userSkills",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      categoryId: {
        type: dataType.UUID,
      },
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { userSkills, user } = models;
  user.hasMany(userSkills, {
    foreignKey: "userId",
    as: "userSkills",
  });
  userSkills.belongsTo(user, {
    foreignKey: "userId",
    as: "userSkills",
  });
}
export { init, associate };
