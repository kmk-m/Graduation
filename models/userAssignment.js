import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userAssignments",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      assignmentId: {
        type: dataType.UUID,
      },
      userId: {
        type: dataType.UUID,
      },
      type: {
        type: dataType.ENUM("Done", "Pending", "Rejected", "New"),
      },
      solution: {
        type: dataType.STRING,
      },
      trackId: {
        type: dataType.UUID,
      },
    },
    {
      timestamps: true,
    }
  );
}
function associate(models) {
  const { userAssignments, user, Assignments, Tracks } = models;
  user.hasMany(userAssignments, {
    foreignKey: "userId",
    as: "userAssignments",
  });
  userAssignments.belongsTo(user, {
    foreignKey: "userId",
    as: "userAssignments",
  });
  Assignments.hasMany(userAssignments, {
    foreignKey: "assignmentId",
  });
  userAssignments.belongsTo(Assignments, {
    foreignKey: "assignmentId",
  });
  Tracks.hasMany(userAssignments, {
    foreignKey: "trackId",
  });
  userAssignments.belongsTo(Tracks, {
    foreignKey: "trackId",
  });
}
export { init, associate };
