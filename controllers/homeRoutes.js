const router = require('express').Router();
const { Tailgates, Items } = require('../model');
const withAuth = require('../utils/auth');

// GET ALL TAILGATES FOR HOMEPAGE
router.get('/', async (req, res) => {
  try {
    const dbData = await Tailgates.findAll({
      include: [
        {
          model: Items,
          attributes: ['item_name'],
        },
        // {
        //     model: Attendance,
        //     attributes: ['item_name'],
        // },
      ],
    });

    const tailgates = dbData.map((tailgate) =>
      tailgate.get({ plain: true })
    );

    res.render('homepage', {
      tailgates,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one TAILGATE
router.get('/tailgate/:id', withAuth, async (req, res) => {
  try {
    const dbData = await Tailgates.findByPk(req.params.id, {
      include: [
        {
          model: Items,
          attributes: [
            'id',
            'user_id',
            'item_name',
          ],
        },
      ],
    });

    const tailgate = dbData.get({ plain: true });
    res.render('tailgate', { tailgate, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one ITEM
router.get('/item/:id', withAuth, async (req, res) => {
  try {
    const dbData = await Items.findByPk(req.params.id);
    const item = dbData.get({ plain: true });

    res.render('item', { item, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
