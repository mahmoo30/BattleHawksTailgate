const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const Tailgates = require("./Tailgates");

class Items extends Model {}

Items.init(
  {
    item_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: Datatypes.INTEGER,
      references: {
        model: User,
        key: "user_id",
      },
    },
    tailgate_id: {
      type: Datatypes.INTEGER,
      references: {
        model: Tailgates,
        key: "tailgate_id",
      },
    },
    item_name: {
      type: Datatypes.STRING(255),
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
