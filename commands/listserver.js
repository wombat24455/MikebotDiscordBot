const index = require('../index.js');
const guilds = index.guildNames;
const guildNum = index

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
                text: 'that is a total of'
            },
        };
        message.channel.send({ embed: [guildList] });
	},
};
