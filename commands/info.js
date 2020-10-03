const package = require('../package.json');
const version = package.version;

function printVersion(message, args, client) {
    message.channel.send('Bot version: ' + version);
}
function printUptime(message, args, client) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days}d, ${hours}h, ${minutes}m and ${seconds}s`;
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
    message.channel.send({ embed: uptimeEmbed });
}
function printAll(message, args, client) {
    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
    let uptime = `${days}d, ${hours}h, ${minutes}m and ${seconds}s`;
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
                value: 'Coming soon',
                inline: true,
            },
        ],
    };
    message.channel.send({ embed: infoEmbed });
}

module.exports = {
	name: 'info',
	description: 'Displays info about the bot.',
	execute(message, args, client) {
        switch(args[0]){
            case 'version':
                return printVersion(message, args, client);
            case 'uptime':
                return printUptime(message, args, client);
            case 'all':
                return printAll(message, args, client);
            default: 
                message.channel.send(`Bro do \`\`${prefix}help\`\` so you know how to use the damn command.`);
                break;
        }
	},
};
