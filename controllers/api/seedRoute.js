const router = require('express').Router();
const { User, Project, Comment }  = require('../../models');
// const seeds = require('../../seeds/fakerseeds.js')
const { faker } = require("@faker-js/faker")


// router.post('/', (req, res) => {
//     res.json('Database Seeded', seeds)
//     // try{
//     //     res.send('Database Seeded', seeds)
//     // } catch(err) {
//     //     res.json(err)
//     // }
// });

// // router.get('/', (req, res) => {
// //     res.json('Database Seeded', seeds)
// //     // try{
// //     //     res.send('Database Seeded', seeds)
// //     // } catch(err) {
// //     //     res.json(err)
// //     // }
// // });
router.post('/', async (req, res) => {
    try {
        const newProject = await Project.create({
            // ...req.body,
            proj_name: faker.music.songName(),
            summary: faker.company.catchPhrase(),
            language: ["HTML", "JavaScript", "CSS", "MySql", "React"],
            proj_repo: faker.internet.url(),
            proj_owned: true,
            user_id: req.session.user_id,
            project_id:req.session.project_id
           
        });
        console.log(newProject)
        res.status(200).json(newProject)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

module.exports = router;