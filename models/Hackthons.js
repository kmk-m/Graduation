import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

async function init(connection) {
  connection.define(
    "Hackathons",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      name: {
        type: dataType.STRING,
        allowNull: false,
      },
      image: {
        type: dataType.STRING,
        allowNull: false,
      },
      free: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      online: {
        type: dataType.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      price: {
        type: dataType.INTEGER,
        allowNull: true,
        defaultValue: 0,
      },
      categoryId: {
        type: dataType.UUID,
      },
      startDate: {
        type: dataType.DATE,
        allowNull: false,
      },
      duoDate: {
        type: dataType.DATE,
        allowNull: false,
      },

      wanted: {
        type: dataType.ENUM("photo", "video"),
        allowNull: false,
      },
      link: {
        type: dataType.TEXT,
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
  const { Hackathons, categories } = models;
  categories.hasOne(Hackathons, {
    foreignKey: "categoryId",
  });
  Hackathons.belongsTo(categories, {
    foreignKey: "categoryId",
  });
}
export { init, associate };
