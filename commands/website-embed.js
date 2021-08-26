module.exports = {
	name: 'website',
	description: 'link to bot website',
	execute(message) {
        const websiteEmbed = {
            color: 0x0099ff,
            title: 'My website:',
            description: 'My website can be found [here](https://wombat24455.github.io/mikebot.github.io/)',
            timestamp: new Date(),
        };
    message.channel.send({ embeds: [websiteEmbed] });
    }
}
