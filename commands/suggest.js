// prevents @everyone and @here from being used in the messages
var everyonePing = '@everyone';
var herePing = '@here';

module.exports = {
	name: 'suggest',
	description: 'Allows you to send suggestions to the MikeBot discord server',
	execute(message, args, client) {
    suggestion = args.join(' ');
    if (message.content.includes(everyonePing)) {
        message.reply("Nice try buckaroo you can't get me to mention everyone");
    } else if (message.content.includes(herePing)) {
        message.reply("Nice try buckaroo you can't get me to mention here");
    } else {
        client.channels.cache.get('731267852564430882').send(suggestion + " - Suggested by user: " + message.author.username + "#" + message.author.discriminator);
    }
	},
};
