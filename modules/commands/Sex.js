module.exports.config = {
name: "Sex",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Sex",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sex")==0 || (event.body.indexOf("Sex")==0)) {
		var msg = {
				body: "  ",
				attachment: fs.createReadStream(__dirname + `/noprefix/Sex.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}