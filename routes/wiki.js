const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js')

router.get('/', async (req, res, next) => {
    res.send('HEY!');
});

router.post('/', async (req, res, next) => {
    res.send('HEY!');
});

router.get('/add', async (req, res, next) => {
    res.send(addPage());
});

module.exports = router;