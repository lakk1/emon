const userRoutes = require('./users/');
const postsRoutes = require('./notes/');

module.exports = (app) => {
  app.use('/api/v1', userRoutes);
  app.use('/api/v1', postsRoutes);
};
