const { Tailgates } = require("../models");

const tailgatesData = [
  {
    tailgate_id: 1,
    event_date: "2023-02-19",
    opposing_logo: "/images/brahmas.png",
    home_game: false,
  },
  {
    tailgate_id: 2,
    event_date: "2023-02-23",
    opposing_logo: "/images/sea-dragons.png",
    home_game: false,
  },
  {
    tailgate_id: 3,
    event_date: "2023-03-05",
    opposing_logo: "/images/defenders.png",
    home_game: false,
  },
  {
    tailgate_id: 4,
    event_date: "2023-03-12",
    opposing_logo: "/images/renegades.png",
    home_game: true,
  },
  {
    tailgate_id: 5,
    event_date: "2023-03-18",
    opposing_logo: "/images/defenders.png",
    home_game: true,
  },
  {
    tailgate_id: 6,
    event_date: "2023-03-25",
    opposing_logo: "/images/vipers.png",
    home_game: false,
  },
  {
    tailgate_id: 7,
    event_date: "2023-04-02",
    opposing_logo: "/images/roughnecks.png",
    home_game: false,
  },
  {
    tailgate_id: 8,
    event_date: "2023-04-08",
    opposing_logo: "/images/vipers.png",
    home_game: true,
  },
  {
    tailgate_id: 9,
    event_date: "2023-04-16",
    opposing_logo: "/images/sea-dragons.png",
    home_game: true,
  },
  {
    tailgate_id: 10,
    event_date: "2023-04-22",
    opposing_logo: "/images/guardians.png",
    home_game: true,
  },
];

const seedTailgates = () => Tailgates.bulkCreate(tailgatesData);

module.exports = seedTailgates;
