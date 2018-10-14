const db = require('../');
const readFileSync = require("fs").readFileSync;

async function dbInit() {
    await db.connect();
    await db.dropCampaigns();
    const initData = await readFileSync('./resources/data.json');
    const parsedInitData = JSON.parse(initData);
    await db.seedCampaigns(parsedInitData);
    await db.disconnect();
}

module.exports = dbInit;
