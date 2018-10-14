const mongoose = require('mongoose');
const AdCampaignPlatformsSchema = require("./AdCampaignPlatforms").Schema;

const AdCampaignSchema = new mongoose.Schema({
    id: Number,
    name: String,
    goal: String,
    total_budget: Number,
    status: String,
    platforms: { type: Map, of: AdCampaignPlatformsSchema },
});

module.exports = {
    Model: mongoose.model('AdCampaign', AdCampaignSchema),
    Schema: AdCampaignSchema
}

