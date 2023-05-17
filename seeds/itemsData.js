const { Items } = require("../models");

const itemsData = [];

const seedItems = () => Items.bulkCreate(itemsData);

module.exports = seedItems;