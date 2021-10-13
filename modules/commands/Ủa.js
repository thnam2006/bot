module.exports.config = {
name: "Ủa",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Ủa",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ủa")==0 || (event.body.indexOf("Ủa")==0)) {
		var msg = {
				body: "ủa ủa ủa ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ủa.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}