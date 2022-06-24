const sequelize = require('../config/connection');
const { User, Project } = require('../models');
const { faker } = require("@faker-js/faker")

// const skills = ["HTML", "JavaScript", "CSS", "MySql", "React"];
// const skillsArr = [];
const allUsers =[];
const allProjects = [];


const createRandomProject = () => {
    // let randNum = Math.floor(Math.random() * skills.length);

    for(var i = 0; i <= 5; i++) {
        let randProj = {
            proj_name: faker.music.songName(),
            summary: faker.company.catchPhrase(),
            language: ["HTML", "JavaScript", "CSS", "MySql", "React"]
        }
        allUsers.push(randProj)
    }
    return allUsers 
};

const createRandomUser = () => {
    // let randNum = Math.floor(Math.random() * skills.length);

    for(var i = 0; i < allProjects.length; i++) {
        let randUser = {
            name: faker.internet.userName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            skills: ["HTML", "JavaScript", "CSS", "MySql", "React"],
            proj_id: i+1,
        }
        allUsers.push(randUser)
    }
    return allUsers 
};

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

  createRandomProject();
  createRandomUser();
  
    const users = await User.bulkCreate(allUsers, {
      individualHooks: true,
      returning: true,
    });
  
    for (const project of allProjects) {
      await Project.create({
        ...project,
        user_id: users[Math.floor(Math.random() * users.length)].id,
      });
    }
  
    process.exit(0);
  };
  
  seedDatabase();
  