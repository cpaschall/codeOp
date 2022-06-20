const router = require('express').Router();
const { Project, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
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

        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in
        });
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


module.exports = router;