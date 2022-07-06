module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });

    await queryInterface.createTable(
      "Items",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        count: {
          type: Sequelize.STRING
        },
        price: {
          type: Sequelize.STRING
        },
        image: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: "Users",
            key: "id"
          }
        },
        createdAt: {
          allowNull: true,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: true,
          type: Sequelize.DATE
        }
      },
      {
        freezeTableName: true
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropAllTables();
  }
};
