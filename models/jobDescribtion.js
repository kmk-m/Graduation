import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

function init(connection) {
  connection.define(
    "jobDescribtion",
    {
      id: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      companyId: {
        type: dataType.UUID,
      },
      categoryId: {
        type: dataType.UUID,
      },
      describtion: {
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
  const {
    categories,
    jobDescribtion,
    companies,
    userSkills,
    courseCategories,
  } = models;
  categories.hasMany(jobDescribtion, {
    foreignKey: "categoryId",
    as: "jobDescribtionCategories",
  });
  jobDescribtion.belongsTo(categories, {
    foreignKey: "categoryId",
    as: "jobDescribtionCategories",
  });

  companies.hasMany(jobDescribtion, {
    foreignKey: "companyId",
    as: "jobDescribtionCompanies",
  });

  jobDescribtion.belongsTo(companies, {
    foreignKey: "companyId",
    as: "jobDescribtionCompanies",
  });

  categories.hasMany(userSkills, {
    foreignKey: "categoryId",
    as: "categories",
  });
  userSkills.belongsTo(categories, {
    foreignKey: "categoryId",
    as: "categories",
  });
}
export { init, associate };
