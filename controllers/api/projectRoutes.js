const router = require('express').Router();
const { Project, User } = require('../../models');
const withAuth = require('../../utils/helpers');

// Create
router.post('/', withAuth, async (req, res) => {
    try {
        const newProject = await Project.create({
            // ...req.body,
        //   user_id: req.body.user_id
                    //   proj_name: req.body.proj_name,
          summary: req.body.summary,
          language: req.body.language,
          proj_owned: true,//req.body.proj_owned,
          proj_contr: req.body.proj_contr,
          user_id: req.session.user_id
           
        });

        res.status(200).json(newProject);
    } catch (err) {
        res.status(400).json(err)
    }
});

// Read
router.get('/', async (req,res) => {
    try {
        const projectData = await Project.findAll()
        res.status(200).json(projectData)
    } catch (err) {
        res.status(500).json(err)
    }
});

// Update
router.put('/:id', withAuth, async (req, res) => {
    try {
        const projectData = await Project.update({
        //   proj_name: req.body.proj_name,
        //   summary: req.body.summary,
        //   language: req.body.language,
        //   proj_owned: req.body.proj_owned,
        //   proj_contr: req.body.proj_contr,
        //   user_id: req.body.user_id
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

// Delete
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

 