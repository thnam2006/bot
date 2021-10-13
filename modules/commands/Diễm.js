module.exports.config = {
name: "Diễm",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Huy",
	description: "Diễm",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("Diễm")==0 || (event.body.indexOf("Diễm")==0)) {
		var msg = {
				body: "uWu đấy là tên admin Diễm cute phô mai que đáng yêu của em 😍 ",
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}