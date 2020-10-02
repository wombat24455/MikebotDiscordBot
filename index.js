const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const randomPuppy = require('random-puppy');

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Extracts the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// bot prefix
prefix = '>$';

// bot version
// format: major.minor.patch
var version = '1.17.15';

// outputs in console when bot code is run
client.on('ready', () => {
    user_count = client.guilds.cache.map((g) => g.memberCount).reduce((a, b) => a + b);
    guildNames = client.guilds.cache.map(g => g.name).join("\n");
    console.log(`Bot logged in as ${client.user.tag}, watching ${client.guilds.cache.size} servers, and serving over ${user_count} users`);
    console.log(`I am currently in:\n${guildNames}`);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'https://www.cwavs.xyz',
            type: 'WATCHING',
        }
    })
})

// Replies to mention of bot
client.on('message', message => {
    if (message.mentions.has(client.user)) {
        message.channel.send(`my prefix is >$ buddy.`);
    }
});

// Prevents usage of @everyone and @here in >$say or >$suggestion messages
const nonoWord = "@everyone";
const nonoWord2 = "@here";

// roadmap embed
const roadmapEmbed = {
    color: 0x0099ff,
    title: 'MikeBot Development',
    description: 'My development roadmap can be found [here](https://github.com/wombat24455/MikebotDiscordBot/projects/1)',
};

// commands
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    switch (args[0]) { // this will be changed at some point
        case 'help':
            client.commands.get('help').execute(message);
            break;
        case 'ping':
            client.commands.get('ping').execute(message);
            break;
        case 'invite':
            message.channel.send('Invite me using this link: https://discord.com/oauth2/authorize?client_id=639421464185143301&scope=bot&permissions=2146958847');
            break;
        case 'info':
            client.commands.get('info').execute(message, args, client, version);
            break;
        case 'del':
            client.commands.get('del').execute(message, args);
            break;
        case 'features':
            client.commands.get('features').execute(message);
            break;
        case 'website':
            client.commands.get('website').execute(message);
            break;
        case 'servercount':
						client.commands.get('servercount').execute(message, client);
            break;
        case 'say':
						client.commands.get('say').execute(message, args, nonoWord, nonoWord2);
            break;
        case 'roadmap':
            client.commands.get('roadmap').execute(message);
            break;
        case 'givmeme':
						client.commands.get('givmeme').execute(message);
            break;
        case 'actinsusngl':
						client.commands.get('actinsusngl').execute(message);
            break;
        case 'suggest':
						client.commands.get('suggest').execute(message, args, nonoWord, nonoWord2);
            break;
        case 'reload':
            client.commands.get('reload').execute(message, client);
            break;
        case 'givtoken':
						client.commands.get('reload').execute(message);
            break;
        case 'reportbug':
						client.commands.get('reportbug').execute(message, args, client);
            break;
    }
})
client.login(process.env.token);
