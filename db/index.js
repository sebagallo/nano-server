const mongoose = require('mongoose');
const Models = require('./models');
const MongodbConfig = require("./config/MongodbConfig");

const { AdCampaign } = Models;

const connect = async () => {
    mongoose.connect(MongodbConfig.url, {
        user: MongodbConfig.user,
        pass: MongodbConfig.pass
    });
    mongoose.connection.on('error', err => {
        throw err;
    });
};

const disconnect = () => mongoose.connection.close();
const getAllCampaigns = async () => AdCampaign.find();
const getCampaign = async(id) => AdCampaign.find({id: id});
const seedCampaigns = async (data) => AdCampaign.insertMany(data);
const dropCampaigns = async () => AdCampaign.collection.drop();

module.exports = {
    connect,
    disconnect,
    getCampaign,
    getAllCampaigns,
    seedCampaigns,
    dropCampaigns
};
