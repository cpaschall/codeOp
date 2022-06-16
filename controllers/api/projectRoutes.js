const router = require('express').Router();
const { Project } = require('../../models');
const { User } = require('./userRoute');

router.get('/', async (req, res) => {
    const projectData = await Project.findAll({ 
        attributes: ["proj_name"]
    })
    res.status(200).json(projectData)
})

module.exports = router;