const router = require('express').Router();
const notesRoute = require('./noteRoutes');

router.use(notesRoute);

module.exports = router;