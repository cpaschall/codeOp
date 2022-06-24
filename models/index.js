const User = require('./User');
const Project = require('./Project');
const Comment =require('./Comment')

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(User, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

User.belongsTo(Project, {
  foreignKey: 'project_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
  });

Project.hasMany(Comment, {
  foreignKey: 'project_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Project, {
  foreignKey: 'project_id'
});

module.exports = { User, Project, Comment};