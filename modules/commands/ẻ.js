module.exports.config = {
name: "ỉa chảy",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "ỉa chảy",
	commandCategory: "Không cần dấu lệnh ",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ỉa")==0 || (event.body.indexOf("Ẻ")==0)) {
		var msg = {
				body: "M ỉa nhiều quá lú hay sao ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}