const sequelize = require('../config/connection');
const { User, Project, Comment } = require("../models")

const userData = require('./userData.json');
const projectData = require('./projectData.json');
const commentData = require('./commentData.json');

const seedDatabase = async () => {
    await sequelize.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME};`)
    await sequelize.query(`CREATE DATABASE ${process.env.DB_NAME};`)
    await sequelize.query(`USE ${process.env.DB_NAME};`)
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const project of projectData) {
       const projectRecord = await Project.create({
          ...project,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
        const comment = commentData[Math.floor(Math.random() * commentData.length)];
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            project_id: projectRecord.id
          });
      }
      process.exit(0);
}

seedDatabase()