module.exports.config = {
name: "Bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Bot",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot đâu")==0 || (event.body.indexOf("bot đâu")==0)) {
		var msg = {
				body: " Kêu em hảaa "
							}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}