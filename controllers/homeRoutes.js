const router = require("express").Router();

const { Project, User, Comment } = require("../models");
const seeds = require('../seeds/fakerseeds.js')
const { faker } = require("@faker-js/faker")

const withAuth = require("../utils/helpers");

router.get("/", async (req, res) => {
  try {
    // res.render('projectDisplay', {
    //     projects,
    //     logged_in: req.session.logged_in
    // });
    res.render("homepage");
  } catch (err) {
    res.statusMessage(500).json(err);
  }
});

// router.get('/project/:id', async (req, res) => {
//     try {
//         const projectData = await Project.findByPk(req.params.id, {
//         include: [
//             {
//             model: User,
//             attributes: ['name'],
//             },
//         ],
//         });

//         const project = projectData.get({ plain: true });

//         res.render('project', {
//         ...project,
//         logged_in: req.session.logged_in
//         });
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  return res.render("signup");
});

router.get("/profile", (req, res) => {
  return res.render("profile");
});

router.get("/project", async (req, res) => {
  try {
    const projectData = await Project.findAll({
      attributes: [
        'id',
        'proj_name',
        'summary',
        'language',
        'proj_repo',
        'proj_owned'
      ],
      include: [
        {
          model: User,
          attributes: ['name']
        },

      ],
    });
    console.log(projectData);

    const projects = projectData.map((project) => project.get({ plain: true }));
    console.log(projects);
    // return res.status(200).json(projects);
    return res.render("project", {
      projects,
      logged_in: true,
      project_page: true,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//   router.get('/test', async( req, res) => {
//     try {
//        const projectData = await Project.findAll({
//         include: [
//             {
//                 model: "user",
//                 attributes: ["name"]

//             }
//         ]
//        })
//     } catch (err) {
//         res.status(400).json(err);
//     }
//   })

router.get("/projectDisplay", withAuth, async (req, res) => {
  console.log("inside project diplay route");
  try {
    const projectData = await Project.findAll({
      attributes: [
        'id',
        'proj_name',
        'summary',
        'language',
        'proj_repo',
        'proj_owned'
      ],
      include: [
        {
          model: User,
          attributes: ["id","name"],
        },
        {
          model: Comment,
          attributes: ['id', "comment_data",'user_id','project_id'],
          include: { model: User, attributes: ['name'] }
        },
      ],
    });

    const projects = projectData.map((project) => project.get({ plain: true }));
    console.log(projectData);
    console.log(projects);
    res.render("projectpage", {
      projects,
      logged_in: req.session.logged_in,
    });
    // res.render('projectDisplay', projects)
  } catch (err) {
    res.statusMessage(500).json(err);
  }
});

// router.get('/seedTest', async (req, res) => {
//   const allSeeds = await seeds
//   const seedData = allSeeds.map((seed) => seed.get({ plain: true }));
//   // seedData = seeds.get({ plain: true })
//   res.render(seedData)
// })

module.exports = router;
