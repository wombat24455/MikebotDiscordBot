module.exports = {
    name: 'features',
	description: 'Displays an embed of the stuff that is coming soon.',
	execute(message) {
        const featureEmbed = {
            color: 0x0099ff,
            title: 'This stuff be coming soon',
            description: 'The stuff listed here might be worked on soon.',
            fields: [
                {
                    name: 'More commands',
                    value: 'I don\'t have many commands rn but more will be added soon.',
                },
                {
                    name: 'Better website functionality',
                    value: 'Not much of the website works rn lol (mostly the top part) so I will work on those at some point.',
                },
            ],
            timestamp: new Date(),
        };
        message.channel.send({ embeds: [featureEmbed] });
    }
}
