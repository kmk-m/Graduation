import dataType from "sequelize";

async function init(connection) {
  connection.define("motivation_videos", {
    video: {
      type: dataType.STRING,
      allowNull: false,
    },
    comment: {
      type: dataType.STRING,
      allowNull: false,
    },
  });
}
export { init };
