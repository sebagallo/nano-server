const mongoose = require('mongoose');
const Models = require('./models');
const MongodbConfig = require("./config/MongodbConfig");

const {AdCampaign} = Models;

const connect = () => {
    return mongoose.connect(MongodbConfig.url, {
        autoReconnect: true,
        user: MongodbConfig.user,
        pass: MongodbConfig.pass
    });
};

mongoose.connection.on('connecting', () => {
    console.log('Connecting to MongoDB...');
});

mongoose.connection.on('connected', () => {
    console.log('MongoDB Succesfully Connected');
});

mongoose.connection.on('error', err => {
    console.error('MongoDB Connection Error');
});

mongoose.connection.on('disconnected', err => {
    console.error('MongoDB Disconnected');
});

mongoose.connection.once('open', () => {
    console.log('MongoDB Connection Opened!');
});

mongoose.connection.on('reconnected', () => {
    console.log('MongoDB Reconnected!');
});

process.on('SIGINT', () => {
    disconnect(() => {
        console.log('Server Terminated, closing connection...');
        process.exit(0);
    });
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
