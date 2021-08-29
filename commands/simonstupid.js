module.exports = {
	name: 'simonstupid',
	description: 'very stuipd',
	execute(message) {
		idiot = message.author.id;
		meanMsg = "WHY U ARE SO STINKET :face_vomiting:";

		switch (idiot) {
			case '375990913870200833':
				message.reply(meanMsg);
				break;
			case '546107653718540298':
				message.reply(meanMsg);
			default:
				message.reply("no");
				break;
		}
	}
}
