const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tailgates extends Model {}

Tailgates.init(
  {
    tailgate_id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_date: {
      type: Datatypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tailgates",
  }
);

module.exports = Tailgates;
