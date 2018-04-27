const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage.js')
const { Page } = require("../models");
const wikipage = require('../views/wikipage.js')

router.get('/', async (req, res, next) => {
    res.send('HEY!');
});

router.get('/add', async (req, res, next) => {
    res.send(addPage());
});

router.get('/:slug', async (req, res, next) => {
    try {
        const page = await Page.findOne({
            where: {
                slug: req.params.slug
            }
        });
        res.json(wikipage(page));
    } catch (error) {next(error)}
});

router.post('/', async (req, res, next) => {
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        slug: req.body.title.replace(/\s+/g, '_').replace(/\W/g, '')
      });
    
      // make sure we only redirect *after* our save is complete!
      // note: `.save` returns a promise.
      try {
        await page.save();
        res.redirect('/');
      } catch (error) { next(error) }
});

module.exports = router;