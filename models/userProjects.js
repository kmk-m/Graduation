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
        allowNull: false,
      },
      projectId: {
        type: dataType.UUID,
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      description: {
        type: dataType.TEXT,
        allowNull: false,
      },
      link: {
        type: dataType.STRING,
        allowNull: false,
      },
      status: {
        type: dataType.ENUM("Accepted", "Pending", "Rejected"),
      },
      Comment: {
        type: dataType.TEXT,
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { user, userProjects, Projects } = models;
  user.hasMany(userProjects, {
    foreignKey: "userId",
    as: "userProjects",
  });
  userProjects.belongsTo(user, {
    foreignKey: "userId",
    as: "userProjects",
  });
  Projects.hasMany(userProjects, {
    foreignKey: "projectId",
    as: "Project",
  });
  userProjects.belongsTo(Projects, {
    foreignKey: "projectId",
    as: "Project",
  });
}
export { init, associate };
