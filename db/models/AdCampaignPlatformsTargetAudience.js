const mongoose = require('mongoose');

const AdCampaignPlatformsTargetAudienceSchema = new mongoose.Schema({
    languages: [String],
    genders: [String],
    age_range: [Number],
    locations: [String],
    interests: [String]
});

module.exports = {
    Model: mongoose.model('AdCampaignPlatformsTargetAudience', AdCampaignPlatformsTargetAudienceSchema),
    Schema: AdCampaignPlatformsTargetAudienceSchema
}
