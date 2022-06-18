const router = require('express').Router();
const { Project, User } = require('../models')

const users = [
    {
        name: "tester",
        email: "test@email.com",
        password: "1234",

    }
]

router.get('/', async (req, res) => {
    // const userData = await User.findAll({
    //     include: [
    //         {
    //             model: User,
    //             attributes: ['name'],
    //         },
    //     ],
    // });
    // const users = userData.map((user) => user.get({ plain: true }))
    res.render('homepage', users[0]);
});

module.exports = router;