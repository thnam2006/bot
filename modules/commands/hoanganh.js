const fs = require("fs");
module.exports.config = {
name: "Hoàng anh",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "dungkon",
	description: "hoàng anh",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.event = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("hoàng anh")==0 || (event.body.indexOf("Hoàng anh")==0)) {
		var msg = {
				body: " sài sòn đêm nay còn mưa không ",
				attachment: fs.createReadStream(__dirname + `/noprefix/hoanganh.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}