import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userInterests",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      interestId: {
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
  const { userInterests, interests, user } = models;
  interests.hasMany(userInterests, {
    foreignKey: "interestId",
    as: "Interests",
  });
  userInterests.belongsTo(interests, {
    foreignKey: "interestId",
    as: "Interests",
  });

  user.hasMany(userInterests, {
    foreignKey: "userId",
    as: "userInterests",
  });
  userInterests.belongsTo(user, {
    foreignKey: "userId",
    as: "userInterest",
  });
}
export { init, associate };
