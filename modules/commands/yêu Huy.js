module.exports.config = {
name: "Yêu Huy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Yêu Huy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yêu Huy")==0 || (event.body.indexOf("Yêu Huy")==0)) {
		var msg = {
				body: " Yêu cái ddjtconmemay  "
							}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}