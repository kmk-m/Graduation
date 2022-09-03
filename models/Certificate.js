import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "Certificates",
    {
      certificateid: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      trackId: {
        type: dataType.UUID,
      },
      courseId: {
        type: dataType.UUID,
      },
      image: {
        type: dataType.STRING,
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
  const { Courses, Tracks, Certificates } = models;
  Courses.hasOne(Certificates, {
    foreignKey: "courseId",
    as: "CourseCertificate",
  });
  Certificates.belongsTo(Courses, {
    foreignKey: "courseId",
    as: "CourseCertificate",
  });
  Tracks.hasOne(Certificates, {
    foreignKey: "trackId",
    as: "TrackCertificate",
  });
  Certificates.belongsTo(Tracks, {
    foreignKey: "trackId",
    as: "TrackCertificate",
  });
}
export { init, associate };
