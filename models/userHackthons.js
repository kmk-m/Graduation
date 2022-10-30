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
        type: dataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      points: {
        type: dataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      time: {
        type: dataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      solution: {
        type: dataType.STRING,
      },
      status: {
        type: dataType.ENUM("NOTSUBMIT", "PENDING", "SUBMITED"),
        allowNull: false,
        defaultValue: "NOTSUBMIT",
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
