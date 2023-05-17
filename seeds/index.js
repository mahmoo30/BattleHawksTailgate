const seedAttendance = require("./attendanceData");
// const seedComments = require("./commentsData");
const seedItems = require("./itemsData");
const seedTailgates = require("./tailgatesData");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await seedAttendance();
  console.log("\n----- ATTENDANCE SEEDED -----\n");

  //   await seedComments();
  //   console.log("\n----- COMMENTS SEEDED -----\n");

  await seedItems();
  console.log("\n----- ITEMS SEEDED -----\n");

  await seedTailgates();
  console.log("\n----- TAILGATES SEEDED -----\n");

  process.exit(0);
};

seedAll();

module.exports = seedAll;
