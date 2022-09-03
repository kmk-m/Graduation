import dataType from "sequelize";
import { UUIDV4 } from "sequelize";
import connection from "../util/connection";
function init(connection) {
  connection.define("resetcode", {
    id: {
      type: dataType.UUID,
      primaryKey: true,
      defaultValue: UUIDV4(),
    },
    code: {
      type: dataType.INTEGER,
      allawNull: false,
    },
    userId: {
      type: dataType.UUID,
      allawNull: false,
    },
  });
}
function associate(models) {
  const { resetcode, user } = models;
  user.hasOne(resetcode, {
    foreignKey: "userId",
  });
  resetcode.belongsTo(user, {
    foreignKey: "userId",
  });
}
export { init, associate };
