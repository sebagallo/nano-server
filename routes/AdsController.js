const express = require('express');
const router = express.Router();
const db = require('./../db');

/* GET users listing. */
router.get('/adcampaign', async function (req, res, next) {
    await db.connect();
    const campaigns = await db.getAllCampaigns();
    res.send(campaigns);
    await db.disconnect();
});

router.get('/adcampaign/:id', async function (req, res, next) {
    await db.connect();
    const campaign = await db.getCampaign(req.params.id);
    res.send(campaign);
    await db.disconnect();
});

module.exports = router;
