module.exports.config = {
name: "Yêu bot",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Yêu bot",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu bot")==0 || (event.body.indexOf("yêu bot")==0)) {
		var msg = {
				body: " .cảm ơn cậu hihi😘, bot cũng yêu bot😘 "
							}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}