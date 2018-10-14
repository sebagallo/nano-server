const mongoose = require('mongoose');
const AdCampaignPlatformsTargetAudienceSchema = require("./AdCampaignPlatformsTargetAudience").Schema;
const AdCampaignPlatformsCreativesSchema = require("./AdCampaignPlatformsCreatives").Schema;
const AdCampaignPlatformsInsightsSchema = require("./AdCampaignPlatformsInsights").Schema;

const AdCampaignPlatformsSchema = new mongoose.Schema({
    status: String,
    total_budget: Number,
    remaining_budget: Number,
    start_date: Date,
    end_date: Date,
    target_audiance: AdCampaignPlatformsTargetAudienceSchema,
    creatives: AdCampaignPlatformsCreativesSchema,
    insights: AdCampaignPlatformsInsightsSchema
});

module.exports = {
    Model: mongoose.model('AdCampaignPlatforms', AdCampaignPlatformsSchema),
    Schema: AdCampaignPlatformsSchema
}

