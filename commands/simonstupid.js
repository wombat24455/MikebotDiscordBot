module.exports = {
	name: 'simonstupid',
	description: 'very stuipd',
	execute(message) {
		idiot = message.author.id;
		meanMsg = "WHY U ARE SO STINKET :face_vomiting:";

		if (idiot === "375990913870200833" || "546107653718540298") {
			message.reply(meanMsg);
		} else {
			message.reply("no");
		}
	}
}
