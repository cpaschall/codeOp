// const sequelize = require('../config/connection');
// const { User, Project } = require('../models');
// const { faker } = require("@faker-js/faker");
// const fs = require('fs')

// // const skills = ["HTML", "JavaScript", "CSS", "MySql", "React"];
// // const skillsArr = [];
// const allUsers =[];
// const allProjects = [];


// // const createRandomProject = () => {
// //     // let randNum = Math.floor(Math.random() * skills.length);

// //     for(var i = 0; i < 5; i++) {
// //         let randProj = {

// //             id: i+1,
// //             proj_name: faker.music.songName(),
// //             summary: faker.company.catchPhrase(),
// //             language: ["HTML", "JavaScript", "CSS", "MySql", "React"],
// //             proj_owned: true,
// //             user_id: i+1
// //         }
// //         allProjects.push(randProj)
// //     }
// //     // const data = "test"
// //     fs.writeFile('seeds/projects.json', JSON.stringify(allProjects), (err) => {
// //       if (err) {
// //         console.log(err);
// //       } else {
// //         console.log("File written successfully\n");
// //       }
// //     })
// //     // return allProjects
// // };

// // const createRandomUser = () => {
// //     // let randNum = Math.floor(Math.random() * skills.length);


// //     for(var i = 0; i < 5; i++) {
// //         let randUser = {
// //             id: i+1,
// //             name: faker.internet.userName(),
// //             email: faker.internet.email(),
// //             password: faker.internet.password(),
// //             skills: ["HTML", "JavaScript", "CSS", "MySql", "React"],
// //             // project_id: i+1
// //         }
// //         allUsers.push(randUser)
// //     }
// //     // const data = "test"
// //     fs.writeFile('seeds/users.json', JSON.stringify(allUsers), (err) => {
// //       if (err) {
// //         console.log(err);
// //       } else {
// //         console.log("File written successfully\n");
// //       }
// //     })
// //     // return allUsers
// // }
//     // console.log(allUsers)
//     // console.log({
//     //     name: faker.internet.userName(),
//     //     email: faker.internet.email(),
//     //     password: faker.internet.password(),
//     //     skills: ["HTML", "JavaScript", "CSS", "MySql", "React"],
//     //     proj_id: i+1
//     // })
    

//             // proj_id: i+1,
// //         }
// //         allUsers.push(randUser)
// //     }
// //     return allUsers 

// // };

// const seedDatabase = async () => {
//     // await sequelize.sync({ force: true });
//     // await sequelize.sync({ force: false , alter : true })
//     for(var i = 0; i < 5; i++) {
//       let randUser = {
//           id: i+1,
//           name: faker.internet.userName(),
//           email: faker.internet.email(),
//           password: faker.internet.password(),
//           skills: ["HTML", "JavaScript", "CSS", "MySql", "React"],
//           // project_id: i+1
//       }
//       allUsers.push(randUser)
//   }
//   // const data = "test"
//   fs.writeFile('seeds/users.json', JSON.stringify(allUsers), (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File written successfully\n");
//     }
//   })
//   for(var i = 0; i < 5; i++) {
//     let randProj = {

//         id: i+1,
//         proj_name: faker.music.songName(),
//         summary: faker.company.catchPhrase(),
//         language: ["HTML", "JavaScript", "CSS", "MySql", "React"],
//         proj_owned: true,
//         user_id: i+1
//     }
//     allProjects.push(randProj)
// }
// // const data = "test"
// fs.writeFile('seeds/projects.json', JSON.stringify(allProjects), (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File written successfully\n");
//   }
// })
//     // await sequelize.sync({ force: false , alter : true })

//   // createRandomProject();
//   // createRandomUser();
//   // // // // createRandomProject();

//   //   const users = await User.bulkCreate(allUsers, {
//   //     individualHooks: true,
//   //     returning: true,
//   //   });
    
//   //   createRandomProject();

//   //   for (const project of allProjects) {
//   //     await Project.create({
//   //       ...project,
//   //       // user_id: users[Math.floor(Math.random() * users.length)].id,
//   //     });
//   //   }

//     // console.log(allUsers)
//     // console.log(allProjects)
//   //   return
//   // createRandomUser()
//   // createRandomProject()
//   process.exit(0);
//     // process.exit(0);
//   };

// seedDatabase();
// // createRandomUser()
// // createRandomProject()
// // process.exit(0);
// // const data = "test"
// // fs.writeFile('users.txt', data, (err) => {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log("File written successfully\n");
// //   }
// // })

  