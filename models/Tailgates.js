const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Tailgates extends Model {}

Tailgates.init(
  {
    tailgate_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    away_logo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    home_logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    home_game: {
      type: DataTypes.BOOLEAN,
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
