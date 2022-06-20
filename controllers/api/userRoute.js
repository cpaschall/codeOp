const router = require('express').Router();
const User = require('../../models/User');
const withAuth = require('../../utils/helpers')

// Create
router.post('/signup', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Read
router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: ["id", "name","email","password"],
    });
    res.status(200).json(userData);
  } catch (error) {
    res.status(400).json({ message: "Server is down" });
  }
});

// Update
router.put('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.update({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    },
    {
      where: {
        id: req.params.id
      },
    });
    if (!userData) {
      res.status(404).json({ message: 'No user found with this ID' });
      return;
    }
    res.json(userData);
  } catch (err) {
    res.status(400).json(err)
  }
});

// Delete
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!userData) {
      res.status(404).json({ message: "No user found with this ID" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// Logout
router.post('/logout', (req, res) =>{
  if(req.session.logged_in) {
    req.session.destroy(() =>{
      res.status(204).end();
    })
  }else {
    res.status(404).end();
  }
});

module.exports = router;