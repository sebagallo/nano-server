const express = require('express');
const router = express.Router();
const db = require('./../db');

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Cache-Control");
    next();
});

router.get('/adcampaign', (req, res, next) => {
    db.getAllCampaigns().then(campaigns => {
        res.send(campaigns);
    }).catch(error => {
        res.status = 500;
        res.send = {error}
    });
});

router.get('/adcampaign/:id', (req, res, next) => {
    db.getCampaign(req.params.id).then(campaign => {
        res.send(campaign);
    }).catch(error => {
        res.status = 500;
        res.send = {error}
    });
});

module.exports = router;
