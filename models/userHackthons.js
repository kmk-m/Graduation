import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userHackthons",
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
    },
    {
      createdAt: false,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Hackathons, user, userHackthons } = models;
  user.hasMany(userHackthons, {
    foreignKey: "userId",
    as: "userhackthons",
  });
  userHackthons.belongsTo(user, {
    foreignKey: "userId",
    as: "userhackthons",
  });
  Hackathons.hasMany(userHackthons, {
    foreignKey: "hackthonId",
    as: "Hackthon",
  });
  userHackthons.belongsTo(Hackathons, {
    foreignKey: "hackthonId",
    as: "Hackthon",
  });
}
export { init, associate };
