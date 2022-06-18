const User = require('./User');
const Project = require('./Project');

User.hasMany(Project, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(User, {
  foreignKey: 'proj_id',
  onDelete: 'CASCADE'
});

Project.belongsTo(User, {
  foreignKey: 'proj_id'
});

module.exports = { User, Project };