const mongoose = require('mongoose');

const AdCampaignPlatformsInsightsSchema = new mongoose.Schema({
    impressions: Number,
    clicks: Number,
    nanos_score: Number,
    cost_per_click: Number,
    click_through_rate: Number,
    advanced_kpi_1: Number,
    advanced_kpi_2: Number
});

module.exports = {
    Model: mongoose.model('AdCampaignPlatformsInsights', AdCampaignPlatformsInsightsSchema),
    Schema: AdCampaignPlatformsInsightsSchema
}

