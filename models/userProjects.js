import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userProjects",
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
      description: {
        type: dataType.STRING,
        allowNull: false,
      },
      link: {
        type: dataType.STRING,
        allowNull: false,
      },
      status: {
        type: dataType.ENUM("Accepted", "Pending", "Rejected"),
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { user, userProjects } = models;
  user.hasMany(userProjects, {
    foreignKey: "userId",
    as: "userProjects",
  });
  userProjects.belongsTo(user, {
    foreignKey: "userId",
    as: "userProjects",
  });
}
export { init, associate };
