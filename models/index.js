const User = require('./User');
const Project = require('./Project');
const Comment =require('./Comment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

Project.hasMany(User, {
  foreignKey: 'proj_id',
  onDelete: 'CASCADE'
});

// User.belongsTo(Project, {
//   foreignKey: 'proj_id'
// });

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
//   });

Project.hasMany(Comment, {
  foreignKey: 'proj_id',
  onDelete: 'CASCADE'
});

// Comment.belongsTo(Project, {
//   foreignKey: 'proj_id'
// });

module.exports = { User, Project, Comment};