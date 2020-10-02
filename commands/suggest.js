module.exports = {
	name: 'suggest',
	description: 'Allows you to send suggestions to the MikeBot discord server',
	execute(message) {
    suggestion = args.slice(1).join(' ');
    if (message.content.includes(nonoWord)) {
        message.reply("Nice try buckaroo you can't get me to mention everyone");
    } else if (message.content.includes(nonoWord2)) {
        message.reply("Nice try buckaroo you can't get me to mention here");
    } else {
        client.channels.cache.get('731267852564430882').send(suggestion + " - Suggested by user: " + message.author.username + "#" + message.author.discriminator);
    };
	},
};
