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
      standing: {
        type: dataType.BIGINT,
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
  const { Hackathons, user, userHackthons } = models;
  user.hasMany(userHackthons, {
    foreignKey: "userId",
  });
  userHackthons.belongsTo(user, {
    foreignKey: "userId",
  });
  Hackathons.hasMany(userHackthons, {
    foreignKey: "hackthonId",
  });
  userHackthons.belongsTo(Hackathons, {
    foreignKey: "hackthonId",
  });
}
export { init, associate };
