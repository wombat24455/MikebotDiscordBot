module.exports = {
	name: 'gh',
	description: 'I reply with the link to my github',
	execute(message) {
    const ghEmbed = {
        color: 0x0099ff,
        title: 'GitHub Repository',
        description: 'Helo :)',
        fields: [
            {
                name: 'This is the link to my github:',
                value: 'https://github.com/wombat24455/MikebotDiscordBot',
            },
        ],
        timestamp: new Date(),
    };
    message.channel.send({ embeds: [ghEmbed] });
	},
};
