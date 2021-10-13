module.exports.config = {
    name: "vattay",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "dungkon",
    description: "",
    commandCategory: "Games",
    usages: "vattay [tag]",
    dependencies: ["path", "jimp"],
    cooldowns: 5
};

module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/cache/canvas/`;
    if (!fs.existsSync(dirMaterial + "canvas")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "vattay.png")) request("https://cdn.fbsbx.com/v/t59.2708-21/192810460_2961041907473651_6516470658226833950_n.gif?_nc_cat=110&ccb=1-3&_nc_sid=041f46&_nc_ohc=m6quEi6JFJoAX_drf-Y&_nc_ht=cdn.fbsbx.com&oh=be66ef8c0a221ecbe0caab8568711420&oe=60B4DC1F").pipe(fs.createWriteStream(dirMaterial + "vattay.png"));
}

async function makeImage({ one }) {    
    const axios = require("axios");
    const fs = require("fs-extra");
    const path = require("path");
    const jimp = require("jimp");
    const __root = path.resolve(__dirname, "cache", "canvas");

    let bopvu_image = await jimp.read(__root + "/vattay.png");
    let pathImg = __root + `/vattay_${one}.png`;
    let avatarOne = __root + `/avt_${one}.png`;
    
    let getAvatarOne = (await axios.get(`https://api.miraiproject.tk/getavatar?ID=${one}`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
    
    
    let circleOne = await jimp.read(await circle(avatarOne));
    bopvu_image.composite(circleOne.resize(160, 160), 215, 72);
    
    let raw = await bopvu_image.getBufferAsync("image/png");
    
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}

module.exports.run = async function ({ event, api, args, client }) {
    const fs = require("fs-extra");
    let { threadID, messageID, senderID } = event;
    var mention = Object.keys(event.mentions);
    if (!mention) return api.sendMessage("Vui lòng tag 1 người", threadID, messageID);
    else {
        var one = mention[0];
        return makeImage({ one }).then(path => api.sendMessage({ body: "Ê\n" + event.mentions[mention[0]].replace(/@/g, "") +"\n mày thắng tao làm sao được ", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}