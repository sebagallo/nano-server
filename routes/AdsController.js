const express = require('express');
const mongo = require('mongodb').MongoClient;
const router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;
