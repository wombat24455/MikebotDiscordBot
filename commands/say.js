module.exports = {
	name: 'say',
	description: 'Get MikeBot to say what you want.',
	execute(message, args, nonoWord, nonoWord2) {
    const sayMessage = args.slice(1).join(' ');
    if (message.content.includes(nonoWord)) {
			message.reply("Nice try buckaroo you can't get me to mention everyone");
    } else if (message.content.includes(nonoWord2)) {
			message.reply("Nice try buckaroo you can't get me to mention here");
		} else {
			message.delete();
			message.channel.send(sayMessage);
    }
	},
};
