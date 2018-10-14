const db = require('../');
const readFileSync = require("fs").readFileSync;

async function dbInit() {
    await db.connect();
    const campaigns = await db.getAllCampaigns();
    if (campaigns.length<=0) {
        const initData = await readFileSync('./resources/data.json');
        const parsedInitData = JSON.parse(initData);
        await db.seedCampaigns(parsedInitData);
    }
    await db.disconnect();
}

module.exports = dbInit;
