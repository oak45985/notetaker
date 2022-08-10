const router = require('express').Router();
const notesRoute = require('../apiRoutes/noteRoutes');

router.use(notesRoute);

module.exports = router;