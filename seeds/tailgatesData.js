const { Tailgates } = require("../models");

const tailgatesData = [
  {
    tailgate_id: 1,
    event_date: "2023-02-19T14:00",
    home_logo: "/images/brahmas.png",
    away_logo: "/images/battlehawks.png",
    home_game: false,
  },
  {
    tailgate_id: 2,
    event_date: "2023-02-23T20:00",
    home_logo: "/images/sea-dragons.png",
    away_logo: "/images/battlehawks.png",
    home_game: false,
  },
  {
    tailgate_id: 3,
    event_date: "2023-03-05T12:00",
    home_logo: "/images/defenders.png",
    away_logo: "/images/battlehawks.png",
    home_game: false,
  },
  {
    tailgate_id: 4,
    event_date: "2023-03-12T15:00",
    home_logo: "/images/battlehawks.png",
    away_logo: "/images/renegades.png",
    home_game: true,
  },
  {
    tailgate_id: 5,
    event_date: "2023-03-18T18:00",
    home_logo: "/images/battlehawks.png",
    away_logo: "/images/defenders.png",
    home_game: true,
  },
  {
    tailgate_id: 6,
    event_date: "2023-03-25T18:00",
    home_logo: "/images/vipers.png",
    away_logo: "/images/battlehawks.png",
    home_game: false,
  },
  {
    tailgate_id: 7,
    event_date: "2023-04-02T13:00",
    home_logo: "/images/roughnecks.png",
    away_logo: "/images/battlehawks.png",
    home_game: false,
  },
  {
    tailgate_id: 8,
    event_date: "2023-04-08T12:00",
    home_logo: "/images/battlehawks.png",
    away_logo: "/images/vipers.png",
    home_game: true,
  },
  {
    tailgate_id: 9,
    event_date: "2023-04-16T14:00",
    home_logo: "/images/battlehawks.png",
    away_logo: "/images/sea-dragons.png",
    home_game: true,
  },
  {
    tailgate_id: 10,
    event_date: "2023-04-22T11:00",
    home_logo: "/images/battlehawks.png",
    away_logo: "/images/guardians.png",
    home_game: true,
  },
];

const seedTailgates = () => Tailgates.bulkCreate(tailgatesData);

module.exports = seedTailgates;
