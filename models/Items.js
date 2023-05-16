const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const Tailgates = require("./Tailgates");

class Items extends Model {}

Items.init(
  {
    item_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    tailgate_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tailgates,
        key: "tailgate_id",
      },
    },
    item_name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "items",
  }
);
module.exports = Items;
