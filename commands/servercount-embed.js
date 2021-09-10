module.exports = {
	name: 'servercount',
	description: 'Displays the number of servers the bot is in',
	execute(message, client) {
        const servercountEmbed = {
            color: 0x0099ff,
            title: 'I am currently in',
            description: `${client.guilds} servers`,
            timestamp: new Date(),
        };
        message.channel.send({ embeds: [servercountEmbed] });
    }
}
