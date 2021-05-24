module.exports = {
	name: 'owo',
	description: 'OwOifies youw sentence',
	execute(message, args) {
    const rawMsg = args.join(' ');
		const owoMsg = rawMsg.replace(/l|r/g, "w")
		message.channel.send(owoMsg);
	},
};
