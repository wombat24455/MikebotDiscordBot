module.exports = {
	name: 'servercount',
	description: 'Displays the number of servers the bot is in',
	execute(message, args, client) {
    const servercountEmbed = {
        color: 0x0099ff,
        title: 'I am currently in',
        description: `${client.guilds.cache.size} servers`,
        timestamp: new Date(),
    };
    message.channel.send({ embed: servercountEmbed });
	},
};
