const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client({ intents: 14023 });

client.commands = new Discord.Collection();

const { MessageEmbed } = require('discord.js');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

/* bot prefix */
prefix = '>$';

BotToken = process.env.token

/* bot version */
/* format: major.minor.patch */
var version = '1.2.2';

/* outputs in console when bot code is run */
client.on('ready', () => {
  var isUsed = false;
  let user_count = 0;

  client.guilds.cache.each((g) => user_count += g.memberCount);
  let guildNames = client.guilds.cache.map(g => g.name).join("\n");
  let guildNum = client.guilds.cache.size;

  console.log(`Bot logged in as ${client.user.tag} v${version}, watching ${guildNum} servers, and serving over ${user_count} users`);
  console.log(`I am currently in:\n${guildNames}`);

  setInterval(() => {
    if (isUsed) {
      client.user.setActivity('https://www.cwavs.xyz/', { type: 'WATCHING' });
      isUsed = false;
    } else {
      client.user.setActivity('the world burn', { type: 'WATCHING' });
      isUsed = true;
    }
  }, 120000);
})

client.on('guildCreate', guild => {
  const channel = guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'));
  console.log(`Joined a new server: ${guild.name}`);
  channel.send("yoyooyoyoyo wassup my broddas");
})

client.on('messageCreate', message => {
  if (message.author.id === client.user.id) return;

  /* Replies to mention of bot */
  if (message.content.includes(client.user.id)) {
    message.channel.send(`my prefix is ${prefix} buddy.`);
  }
  /* Reacts to the specified user's messages */
  if (message.author.id === "765874143064358923") {
    message.react('😡');
  }
});

/* command handler */
client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return; // nice

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

client.login(BotToken);
// hello fellow user
