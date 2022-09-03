import dataType from "sequelize";
import { UUIDV4 } from "sequelize";

async function init(connection) {
  connection.define(
    "Courses",
    {
      courseId: {
        type: dataType.UUID,
        primaryKey: true,
        defaultValue: UUIDV4(),
      },
      image: {
        type: dataType.STRING,
        allowNull: false,
      },
      rating: {
        type: dataType.BIGINT,
        allowNull: false,
      },
      coursePlan: {
        type: dataType.STRING,
        allowNull: false,
      },
      introVideo: {
        type: dataType.STRING,
        allowNull: false,
      },
      description: {
        type: dataType.STRING,
        allowNull: false,
      },
      duration: {
        type: dataType.STRING,
        allowNull: false,
      },
      instructor: {
        type: dataType.STRING,
        allowNull: false,
      },
      students: {
        type: dataType.BIGINT,
        allowNull: false,
      },
      language: {
        type: dataType.ENUM("Arabic", "English"),
        allowNull: false,
      },
      baseCourse: {
        type: dataType.STRING,
      },
      allow: {
        type: dataType.BOOLEAN,
      },
      numberOfAssignments: {
        type: dataType.TINYINT,
        allowNull: false,
      },
      numberOfQuizess: {
        type: dataType.TINYINT,
        allowNull: false,
      },
      numberOfProjects: {
        type: dataType.TINYINT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      updatedAt: false,
    }
  );
}

export { init };
