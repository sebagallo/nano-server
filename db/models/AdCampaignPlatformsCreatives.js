const mongoose = require('mongoose');

const AdCampaignPlatformsCreativesSchema = new mongoose.Schema({
    header: String,
    description: String,
    url: String,
    image: String
});

module.exports = {
    Model: mongoose.model('AdCampaignPlatformsCreatives', AdCampaignPlatformsCreativesSchema),
    Schema: AdCampaignPlatformsCreativesSchema
}
