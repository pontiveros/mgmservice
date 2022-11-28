'use strict';

const express = require('express');
const router = express.Router();
const items = require('../services/item');

/* GET */
router.get('/', async function(req, res) {
    const txtContent = await items.getItems();
    console.log(txtContent);
    // res.json(txtContent); 
    res.send(txtContent);
});

module.exports = router;