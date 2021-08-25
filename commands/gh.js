module.exports = {
	name: 'gh',
	description: 'I reply with the link to my github',
	execute(message) {
    const ghEmbed = {
        color: 0x0099ff,
        title: 'This stuff be coming soon',
        description: 'The stuff listed here might be worked on soon.',
        fields: [
            {
                name: 'Helo :)',
                value: 'This is the link to my github: https://github.com/wombat24455/MikebotDiscordBot',
            },
        ],
        timestamp: new Date(),
    };
    message.channel.send({ embeds: [ghEmbed] });
	},
};
