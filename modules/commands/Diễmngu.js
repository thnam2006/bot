module.exports.config = {
name: "ngu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Diễm ngu",
	commandCategory: "Chửi admin :) ",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Diễm ngu")==0 || (event.body.indexOf("diễm ngu")==0)) {
		var msg = {
				body: "mày thông minh hơn admin tao chắc? ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}