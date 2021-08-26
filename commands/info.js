const package = require('../package.json');
const version = package.version;

const vars = require("../vars.js");
const uptime = vars.botUptime;

function printVersion(message) {
    message.channel.send('Bot version: ' + version);
}
function printUptime(message) {

    const uptimeEmbed = {
        color: 0x0099ff,
        title: 'I have been awake for',
        fields: [
            {
                name: uptime,
                value: 'I tend to sleep every now and then',
            },
        ],
        timestamp: new Date(),
        footer: {
            text: 'Nothin down here buddy'
        },
    };
    message.channel.send({ embed: [uptimeEmbed] });
}
function printAll(message, client) {
    const infoEmbed = {
        color: 0x0099ff,
        title: 'Bot info',
        fields: [
            {
                name: 'Bot version',
                value: version,
                inline: true,
            },
            {
                name: 'Server count',
                value: `${client.guilds.cache.size} servers`,
                inline: true,
            },
            {
                name: 'Programming language',
                value: 'Javascript',
                inline: true,
            },
            {
                name: 'Bot framework',
                value: 'Discord.js',
                inline: true,
            },
            {
                name: 'Bot uptime',
                value: uptime,
                inline: false,
            },
            {
                name: 'Bot owner',
                value: 'AM GAMOr (wombat)#1521',
            },
            {
                name: 'Bot owner ID',
                value: '546107653718540298',
            },
            {
                name: 'Bot prefix',
                value: '>$',
            },
            {
                name: 'Invite me',
                value: '[Click here](https://discord.com/oauth2/authorize?client_id=639421464185143301&scope=bot&permissions=2146958847)',
                inline: true,
            },
            {
                name: 'My website',
                value: '[Click here](https://wombat24455.github.io/mikebot.github.io/)',
                inline: true,
            },
            {
                name: 'My Discord',
                value: '[Join](https://discord.gg/JKMSZds)',
                inline: true,
            },
        ],
    };
    message.channel.send({ embeds: [infoEmbed] });
}

module.exports = {
	name: 'info',
	description: 'Displays info about the bot.',
	execute(message, args) {
        switch(args[0]){
            case 'version':
                return printVersion(message);
            case 'uptime':
                return printUptime(message);
            case 'all':
                return printAll(message);
            default:
                message.reply(`Did i stutter? Re-read the help message or use either \`version\`, \`uptime\`, or \`all\``);
                break;
        }
	},
};
