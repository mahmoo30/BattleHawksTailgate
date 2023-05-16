const Attendance = require("./Attendance");
const Items = require("./Items");
const Tailgates = require("./Tailgates");
const User = require("./User");

User.hasMany(Items, {
  foreignKey: "user_id",
});

User.hasMany(Attendance, {
  foreignKey: "user_id",
});

User.hasMany(Tailgates, {
  foreignKey: "user_id",
});

Tailgates.belongsTo(User, {
  foreignKey: "user_id",
});

Tailgates.hasMany(Items, {
  foreignKey: "tailgate_id",
});

Items.belongsTo(User, {
  foreignKey: "user_id",
});

Items.belongsTo(Tailgates, {
  foreignKey: "tailgate_id",
});

Attendance.belongsTo(User, {
  foreignKey: "user_id",
});

Attendance.belongsTo(Tailgates, {
  foreignKey: "tailgate_id",
});

module.exports = { Attendance, Items, Tailgates, User };
