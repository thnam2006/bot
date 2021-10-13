module.exports.config = {
name: "tồi",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Huy tồi",
	commandCategory: "Chửi admin :) ",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Diễm tồi")==0 || (event.body.indexOf("Diễm tồy")==0)) {
		var msg = {
				body: " ‍ Admin của tao tồi khi nào? ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}