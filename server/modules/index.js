const authRoutes = require('./users/');
const postsRoutes = require('./notes/');

module.exports = (app) => {
	app.use('/api/v1', authRoutes);
	app.use('/api/v1', postsRoutes);
};
