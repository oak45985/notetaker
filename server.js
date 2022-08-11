const fs = require('fs');
const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const hmtlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// const { notes } = require('./db/db.json');

app.use('/api', apiRoutes);

app.use('/', hmtlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`)
});