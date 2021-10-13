module.exports.config = {
    name: "chuilientuc",
    version: "1.0.0",
    hasPermssion: 1,
    credits: "Huy &dựa trên taglientuc của VanHung & Dựa trên demo của NTKhang",
    description: "Chửi liên tục 5 lần =)))",
    commandCategory: "group",
    usages: "chuilientuc @mention",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
    var mention = Object.keys(event.mentions)[0];
    if(!mention) return api.sendMessage("Cần phải tag để chửi 1 ai đó", event.threadID);
    let data = await api.getUserInfo(mention);
    let name = data[parseInt(mention)].name;
    var arraytag = [];
        arraytag.push({id: mention, tag: name});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("Bắt đầu chửi!");
setTimeout(() => {a({body: "Alo ra đây anh bảo " + " " + name, mentions: arraytag})} , 3000);
setTimeout(() => {a({body: "D!t me mày ranh con " + " " + name, mentions: arraytag})} , 4000);
setTimeout(() => {a({body: "D!t me mày ranh con " + " " + name, mentions: arraytag})} , 5000);
setTimeout(() => {a({body: "D!t me mày ranh con " + " " + name, mentions: arraytag})} , 6000);
setTimeout(() => {a({body: "D!t me mày ranh con" + " " + name, mentions: arraytag})} , 6500);
setTimeout(() => {a({body: "D!t me mày ranh con" + " " + name, mentions: arraytag})} , 7000);
setTimeout(() => {a({body: "D!t me mày ranh con" + " " + name, mentions: arraytag})} , 7500);
setTimeout(() => {a({body: "D!t me mày ranh con" + " " + name, mentions: arraytag})} , 8000);
 }