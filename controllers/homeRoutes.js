const router = require("express").Router();
const { User, Tailgates, Items } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const dbData = await Tailgates.findAll({
      attributes: [
        "tailgate_id",
        "event_date",
        "away_logo",
        "home_logo",
        "home_game",
      ],
    });

    const tailgates = dbData.map((tailgate) => tailgate.get({ plain: true }));

    console.log(tailgates);

    res.render("homepage", {
      tailgates,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one TAILGATE
router.get("/tailgate/:id", withAuth, async (req, res) => {
  try {
    const dbData = await Tailgates.findByPk(req.params.id, {
      include: [
        {
          model: Items,
          attributes: ["id", "user_id", "item_name"],
        },
      ],
    });

    const tailgate = dbData.get({ plain: true });
    res.render("tailgate", { tailgate, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one ITEM
router.get("/item/:id", withAuth, async (req, res) => {
  try {
    const dbData = await Items.findByPk(req.params.id);
    const item = dbData.get({ plain: true });

    res.render("item", { item, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", async (req, res) => {

    res.render("signup");
  });

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Items }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
