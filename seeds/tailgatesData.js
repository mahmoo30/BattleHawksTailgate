const { Tailgates } = require("../models");

const tailgatesData = [
  {
    tailgate_id: 1,
    event_date: "2023-02-19",
    opposing_logo: "/public/images/brahmas.png",
    home_or_away: false,
  },
  {
    tailgate_id: 2,
    event_date: "2023-02-23",
    opposing_logo: "/public/images/sea-dragons.png",
    home_or_away: false,
  },
  {
    tailgate_id: 3,
    event_date: "2023-03-05",
    opposing_logo: "/public/images/defenders.png",
    home_or_away: false,
  },
  {
    tailgate_id: 4,
    event_date: "2023-03-12",
    opposing_logo: "/public/images/renegades.png",
    home_or_away: true,
  },
  {
    tailgate_id: 5,
    event_date: "2023-03-18",
    opposing_logo: "/public/images/defenders.png",
    home_or_away: true,
  },
  {
    tailgate_id: 6,
    event_date: "2023-03-25",
    opposing_logo: "/public/images/vipers.png",
    home_or_away: false,
  },
  {
    tailgate_id: 7,
    event_date: "2023-04-02",
    opposing_logo: "/public/images/roughnecks.png",
    home_or_away: false,
  },
  {
    tailgate_id: 8,
    event_date: "2023-04-08",
    opposing_logo: "/public/images/vipers.png",
    home_or_away: true,
  },
  {
    tailgate_id: 9,
    event_date: "2023-04-16",
    opposing_logo: "/public/images/sea-dragons.png",
    home_or_away: true,
  },
  {
    tailgate_id: 10,
    event_date: "2023-04-22",
    opposing_logo: "/public/images/guardians.png",
    home_or_away: true,
  },
];

const seedTailgates = () => Tailgates.bulkCreate(tailgatesData);

module.exports = seedTailgates;
