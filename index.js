const fs = require('fs');
const Discord = require('discord.js');
const token = require('./token.json');

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
prefix = '$';

// bot version
// format: major.minor.patch
var version = '1.17.15';

// outputs in console when bot code is run
client.on('ready', () => {
    let user_count = 0;
    client.guilds.cache.each((g) => user_count += g.memberCount);
    let guildNames = client.guilds.cache.map(g => g.name).join("\n");
    
    console.log(`Bot logged in as ${client.user.tag}, watching ${client.guilds.cache.size} servers, and serving over ${user_count} users`);
    console.log(`I am currently in:\n${guildNames}`);

    client.user.setPresence({
        status: 'online',
        activity: {
            name: 'my developers fail',
            type: 'WATCHING',
        }
    })
})

// Replies to mention of bot
client.on('message', message => {
    if (message.mentions.has(client.user)) {
        message.channel.send(`my prefix is ${prefix} buddy.`);
    }
});

// Prevents usage of @everyone and @here in >$say or >$suggestion messages
const nonoWord = "@everyone";
const nonoWord2 = "@here";

// commands
client.on('message', async message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
        client.commands.get(command).execute(message, args);
        
	} catch (error) {
		console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
client.login(token);
