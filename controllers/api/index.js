const router = require('express').Router();
const userRoutes = require('./userRoute');
const projectRoutes = require('./projectRoutes')
const commentRoutes = require('./commentRoute')
// const seedDatabaseRoutes = require("./seedRoute")

router.use('/users', userRoutes);
router.use('/projects', projectRoutes);
router.use('/comments', commentRoutes);
// router.use('/seeds', seedDatabaseRoutes);

module.exports = router;