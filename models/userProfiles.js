import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userProfiles",
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
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { user, userProfiles } = models;
  user.hasMany(userProfiles, {
    foreignKey: "userId",
    as: "userProfiles",
  });
  userProfiles.belongsTo(user, {
    foreignKey: "userId",
    as: "userProfiles",
  });
}
export { init, associate };
