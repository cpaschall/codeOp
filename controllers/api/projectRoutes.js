const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/helpers');
const { User } = require('./userRoute');

// router.get('/', async (req, res) => {
//     const projectData = await Project.findAll({ 
//         attributes: ["proj_name"]
//     })
//     res.status(200).json(projectData)
// })

router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err)
    }
});

module.exports = router;