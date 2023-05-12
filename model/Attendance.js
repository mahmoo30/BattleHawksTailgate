const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");
const Tailgates = require("./Tailgates");

class Attendance extends Model {}

Attendance.init(
  {
    attendance_id: {
      type: Datatypes.INTEGER,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "attendance",
  }
);

module.exports = Attendance;
