const router = require('express').Router();

const { Project, User } = require('../models');

const withAuth = require('../utils/helpers');


router.get('/projectDisplay', async (req, res) => {
    try {
        const projectData = await Project.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });

        const projects = projectData.map((project) => project.get({ plain: true }));

        // res.render('projectDisplay', {
        //     projects,
        //     logged_in: req.session.logged_in
        // });
        res.render('projectDisplay', projects)
      
    } catch (err) {
        res.statusMessage(500).json(err);
    }
});

router.get('/project/:id', async (req, res) => {
    try {
        const projectData = await Project.findByPk(req.params.id, {
        include: [
            {
            model: User,
            attributes: ['name'],
            },
        ],
        });

        const project = projectData.get({ plain: true });

        res.render('project', {
        ...project,
        logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/login", async (req, res) => {
    res.render("login");
  });

router.get("/signup", async (req, res) => {
    return res.render("signup");
  });

  router.get("/project", async (req, res) => {
    return res.render("project");
  });



  router.get('/test', async( req, res) => {
    try {
       const projectData = await Project.findAll({
        include: [
            {
                model: "user",
                attributes: []

            }
        ]
       })
    } catch (err) {
        res.status(400).json(err);
    }
  })


module.exports = router;