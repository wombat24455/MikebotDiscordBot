module.exports = {
	name: 'owo',
	description: 'OwOifies youw sentence',
	execute(message, args) {
		var num = Math.floor(Math.random() * 5);
		var face = "";
		switch(num) {
			case 0:
				face = "OwO";
				break;
			case 1:
				face = "owo";
				break;
			case 2:
				face = "Owo";
				break;
			case 3:
				face = "ÒwÓ";
				break;
			case 4:
				face = "UwU";
				break;
			case 5:
				face = "uwu";
				break;
		}

    const rawMsg = args.join(' ');
		const owoMsg = rawMsg.replace(/l|r/g, "w")
		message.channel.send(`${owoMsg} ${face}`);
	},
};
