const mongoose = require('mongoose');
const Models = require('./models');
const MongodbConfig = require("./config/MongodbConfig");
const logger = require('./helpers/logger').logger;

const {AdCampaign} = Models;

const connect = () => {
    return mongoose.connect(MongodbConfig.url, {
        useNewUrlParser: true,
        autoReconnect: true,
        user: MongodbConfig.user,
        pass: MongodbConfig.pass
    });
};

mongoose.connection.on('connecting', () => {
    logger.info('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
    logger.info('MongoDB Succesfully Connected');
});

mongoose.connection.on('error', err => {
    logger.error('MongoDB Connection Error');
});

mongoose.connection.on('disconnected', err => {
    logger.warn('MongoDB Disconnected');
});

mongoose.connection.once('open', () => {
    logger.info('MongoDB Connection Opened!');
});

mongoose.connection.on('reconnected', () => {
    logger.info('MongoDB Reconnected!');
});

process.on('SIGINT', async () => {
    await disconnect();
    process.exit(0);
});

const disconnect = () => mongoose.connection.close();
const getAllCampaigns = () => AdCampaign.find().maxTimeMS(MongodbConfig.timeout);
const getCampaign = (id) => AdCampaign.find({id: id}).maxTimeMS(MongodbConfig.timeout);
const seedCampaigns = (data) => AdCampaign.insertMany(data).maxTimeMS(MongodbConfig.timeout);
const dropCampaigns = () => AdCampaign.collection.drop();

module.exports = {
    connect,
    disconnect,
    getCampaign,
    getAllCampaigns,
    seedCampaigns,
    dropCampaigns
};
