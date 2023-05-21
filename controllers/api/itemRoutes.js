const router = require('express').Router();
const { Items } = require("../../models");
const withAuth = require('../../utils/auth');

console.log('I AM ITEMROUTES');

router.post('/', withAuth, async (req, res) => {
 console.log('I AM ITEM POSTING');
 console.log(req.body);

    try {
    const newItem = await Items.create({
      item_name: req.body.item_name,
      user_id: req.session.user_id,
      tailgate_id: req.body.tailgate_id,
    });

    console.log('I AM NEW ITEM', newItem);
    res.status(200).json(newItem);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const itemData = await Items.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!itemData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(itemData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
