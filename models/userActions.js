import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userActions",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      assignmentId: {
        type: dataType.UUID,
      },
      quizeId: {
        type: dataType.UUID,
      },
      projectId: {
        type: dataType.UUID,
      },
      status: {
        type: dataType.ENUM("Pending", "Accpted", "Rejected", "subbmit"),
        allowNull: false,
      },
    },
    {
      timeStamp: true,
      updatedAt: false,
    }
  );
}
function associate(models) {
  const { Quizess, user, Assignments, Projects, userActions } = models;
  user.hasMany(userActions, {
    foreignKey: "userId",
    as: "userActions",
  });
  userActions.belongsTo(user, {
    foreignKey: "userId",
    as: "userActions",
  });
  Assignments.hasMany(userActions, {
    foreignKey: "assignmentId",
    as: "userAssignments",
  });
  userActions.belongsTo(Assignments, {
    foreignKey: "assignmentId",
    as: "userAssignments",
  });
  Projects.hasMany(userActions, {
    foreignKey: "projectId",
    as: "userProjects",
  });
  userActions.belongsTo(Projects, {
    foreignKey: "projectId",
    as: "userProjects",
  });
  Quizess.hasMany(userActions, {
    foreignKey: "quizeId",
    as: "userQuizesses",
  });
  userActions.belongsTo(Quizess, {
    foreignKey: "quizeId",
    as: "userQuizesses",
  });
}
export { init, associate };
