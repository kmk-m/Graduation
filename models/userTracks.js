import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userTracks",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      trackId: {
        type: dataType.UUID,
      },
      status: {
        type: dataType.ENUM("Pending", "Done"),
      },
    },
    {
      timeStamp: true,
      createdAt: false,
    }
  );
}
function associate(models) {
  const { Tracks, user, userTracks } = models;
  user.hasMany(userTracks, {
    foreignKey: "userId",
    as: "userTracks",
  });
  userTracks.belongsTo(user, {
    foreignKey: "userId",
    as: "userTracks",
  });
  Tracks.hasMany(userTracks, {
    foreignKey: "trackId",
    as: "tracks",
  });
  userTracks.belongsTo(Tracks, {
    foreignKey: "trackId",
    as: "tracks",
  });
}
export { init, associate };
