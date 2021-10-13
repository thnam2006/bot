module.exports.config = {
name: "Ncc",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Huy ncc",
	commandCategory: "Chửi admin :) ",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Huy ncc")==0 || (event.body.indexOf("huy ncc")==0)) {
		var msg = {
				body: " ‍ Mày ncc thì có ở đó mà chửi admin tao ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}