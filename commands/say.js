// prevents @everyone and @here from being used in the messages
var everyonePing = '@everyone';
var herePing = '@here';

module.exports = {
	name: 'say',
	description: 'Get MikeBot to say what you want.',
	execute(message, args) {
    const sayMessage = args.join(' ');
    if (message.content.includes(everyonePing)) {
	    message.delete();
	    message.reply("Nice try buckaroo you can't get me to mention everyone @everyone");
    } else if (message.content.includes(herePing)) {
	    message.delete();
	    message.reply("Nice try buckaroo you can't get me to mention here @here");
    } else {
	    message.delete();
			message.channel.send(sayMessage);
		}
	},
};
