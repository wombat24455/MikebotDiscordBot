module.exports = {
	name: 'say',
	description: 'Get MikeBot to say what you want.',
	execute(message, args, everyonePing, herePing) {
    const sayMessage = args.join(' ');
    if (message.content.includes(everyonePing)) {
	    message.reply("Nice try buckaroo you can't get me to mention everyone");
    } else if (message.content.includes(herePing)) {
	    message.reply("Nice try buckaroo you can't get me to mention here");
    } else {
	    message.delete();
			message.channel.send(sayMessage);
		}
	},
};
