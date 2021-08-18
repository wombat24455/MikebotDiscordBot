const index = require('../index.js');
const guilds = index.guildNames;
const guildNum = index.guildNum;

module.exports = {
	name: 'invite',
	description: 'invite me using this pls',
	execute(message) {
        const guildList = {
            color: 0x0099ff,
            title: 'I have been awake for',
            fields: [
                {
                    name: 'List of servers I am in',
                    value: guilds,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: `A total of ${guildNum} servers`
            },
        };
        message.channel.send({ embed: [guildList] });
	},
};
