module.exports.config = {
name: "Huy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Huy",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Huy")==0 || (event.body.indexOf("Huy")==0)) {
		var msg = {
				body: "uWu đó là tên Admin xịn xò của em 😍 ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}