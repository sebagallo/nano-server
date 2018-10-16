const MongodbConfig = {
    url: process.env.DB_URL || 'mongodb://192.168.1.100:69/',
    user: process.env.DB_USER || 'root',
    pass: process.env.DB_PASS || 'mdb1',
    timeout: 30000
};

module.exports = MongodbConfig;
