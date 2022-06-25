const router = require('express').Router();
const { Project, User } = require('../../models');
const withAuth = require('../../utils/helpers');

// Create - create new Project and change the proj_owned to 'true' for the user creating it
router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            ...req.body,
          proj_owned: true,
          user_id: req.session.user_id
           
        });
        console.log(newProject)
        res.status(200).json(newProject)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// Read - find all users
router.get('/', async (req,res) => {
    try {
        const projectData = await Project.findAll()
        res.status(200).json(projectData)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Update - edit and edit the existing project
router.put('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.update({
          ...req.body,
          user_id: req.session.user_id
        },
        {
          where: {
            id: req.params.id
          },
        });
        if (!projectData) {
          res.status(404).json({ message: 'No project found with this ID' });
          return;
        }
        res.json(projectData);
      } catch (err) {
        res.status(400).json(err)
      }
});

// Delete - delete a project
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        if (!projectData) {
            res.status(404).json({ message: 'No project found with this ID' });
            return;
        }

        res.status(200).json(projectData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;

 