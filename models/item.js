"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, {
        foreignKey: "userId",
        as: "user"
      });
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING
      },
      count: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      image: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "Item"
    }
  );
  return Item;
};
