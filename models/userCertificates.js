import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "userCertificates",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      userId: {
        type: dataType.UUID,
      },
      certificateid: {
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
  const { Certificates, user, userCertificates } = models;
  user.hasMany(userCertificates, {
    foreignKey: "userId",
    as: "userCertificate",
  });
  userCertificates.belongsTo(user, {
    foreignKey: "userId",
    as: "userCertificate",
  });
  Certificates.hasMany(userCertificates, {
    foreignKey: "certificateid",
    as: "courseCertificate",
  });
  userCertificates.belongsTo(Certificates, {
    foreignKey: "certificateid",
    as: "courseCertificate",
  });
}
export { init, associate };
