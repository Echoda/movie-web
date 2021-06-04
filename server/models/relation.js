
const Movie = require('./Movie');
const User = require('./User');
const Comment = require('./Comment');

// 关联
Comment.belongsTo(Movie);
Comment.belongsTo(User);