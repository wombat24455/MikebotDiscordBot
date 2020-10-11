module.exports = {
	name: 'givtoken',
	description: 'gives you the bot token?? whaaaat!?!?!?',
	execute(message) {
    const tokenEmbed = {
        color: 0x0099ff,
        title: 'Super secret bot token',
        fields: [
            {
                name: 'this my super secret bot token :eyes:',
                value: `[View bot token here](https://shorturl.at/el158)`,
                inline: false,
            },
        ],
    };
    message.channel.send({ embed: tokenEmbed });
	},
};
