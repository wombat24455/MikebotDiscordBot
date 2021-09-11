module.exports = {
	name: 'servercount',
	description: 'Displays the number of servers the bot is in',
    execute: function (message, client) {
        const servercountEmbed = {
            color: 0x0099ff,
            title: 'I am currently in',
            description: client.guilds.cache.map(g => g.name).length + ` servers`, // we shall see
            timestamp: new Date(),
        };
        message.channel.send({embeds: [servercountEmbed]});
    }
}
