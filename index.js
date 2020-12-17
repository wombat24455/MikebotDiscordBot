const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client()
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

// Extracts the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// bot prefix
prefix = '>$';

token = process.env.token

// bot version
// format: major.minor.patch
var version = '1.17.17';

// outputs in console when bot code is run
client.on('ready', () => {
	var isUsed = false;
  let user_count = 0;
  client.guilds.cache.each((g) => user_count += g.memberCount);
  let guildNames = client.guilds.cache.map(g => g.name).join("\n");

  console.log(`Bot logged in as ${client.user.tag}, watching ${client.guilds.cache.size} servers, and serving over ${user_count} users`);
  console.log(`I am currently in:\n${guildNames}`);

	setInterval(() => { //switches bot status every 2 mins
	if (isUsed) {
	client.user.setPresence({
		status: `online`,
		activity: {
			name: `https://cwavs.xyz`,
			type: `WATCHING`,
		}
	})
	isUsed = false;
	} else {
	client.user.setPresence({
		status: `online`,
		activity: {
			name: `the world burn`,
			type: `WATCHING`,
		}
	})
	isUsed = true;
	}}, 120000);
})

// Replies to mention of bot
client.on('message', message => {
  if (message.author.id === client.user.id) return;

  if (message.content.includes(client.user.id)) {
    message.channel.send(`my prefix is ${prefix} buddy.`);
  }
});

// commands
client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('Oi mate somefing wrong innit bruv, this command wont work bruv');
	}
});

client.login(token);
// hello fellow user
