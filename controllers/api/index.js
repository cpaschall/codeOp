const router = require('express').Router();
const userRoutes = require('./userRoute');
const projectRoutes = require('./projectRoutes')


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);


module.exports = router;