import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "hackathonRequirments",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      hackthonId: {
        type: dataType.UUID,
      },
      content: {
        type: dataType.TEXT,
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
  const { Hackathons, user, hackathonRequirments } = models;
  Hackathons.hasMany(hackathonRequirments, {
    foreignKey: "hackthonId",
  });
  hackathonRequirments.belongsTo(Hackathons, {
    foreignKey: "hackthonId",
  });
}
export { init, associate };
