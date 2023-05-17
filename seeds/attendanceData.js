const { Attendance } = require("../models");

const attendanceData = [];

const seedAttendance = () => Attendance.bulkCreate(attendanceData);

module.exports = seedAttendance;