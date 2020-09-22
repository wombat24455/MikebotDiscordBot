const Discord = require('discord.js');
const client = new Discord.Client()
const randomPuppy = require('random-puppy');
//const pm2 = require("pm2")
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Testing'))

app.listen(port, () => console.log(`listening at http://localhost:${port}`))

// bot prefix
prefix = '>$';

// bot version
// format: major.minor.patch
var version = '1.16.14';

// outputs in console when bot code is run
client.on('ready', () =>{
    user_count = client.guilds.cache.map((g) => g.memberCount).reduce((a, b) => a+b);
    console.log('Bot logged in as ' + client.user.tag + `, watching ${client.guilds.cache.size} servers, and serving over ${user_count} users`);

    client.user.setActivity("you in disappointment", { type: "WATCHING"});
})

// Extracts the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// Replies to mention of bot
client.on('message', message=> {
    if (message.mentions.has(client.user)) {
        message.channel.send(`my prefix is >$ buddy.`);
    }
});

// Prevents usage of @everyone and @here in >$say or >$suggestion messages
const nonoWord = "@everyone";
const nonoWord2 = "@here"

// Embed messages
//help embed
const helpEmbed = {
    color: 0x0099ff,
    title: 'MikeBot Command List',
    description: 'Here is the "huge" list of my commands lol',
    thumbnail: {
        url: 'https://i.vgy.me/HnWKX3.png',
    },
    fields: [
        {
            name: '>$ping',
            value: 'I reply with the response time.. you already knew that already didn\'t ya',
        },
        {
            name: '>$invite',
            value: 'I give you the link to add me to your server',
        },
        {
            name: '>$info [query]',
            value: 'Available info about me (replace [query] with all, version or uptime)',
        },
        {
            name: '>$del [amount]',
            value: 'I bulk delete the amount of messages you tell me to delete',
        },
        {
            name: '>$features',
            value: 'I reply with a list of stuff that I will be able to do in the future',
        },
        {
            name: '>$website',
            value: 'I send a link to my website (not 100% functional)',
        },
        {
            name: '>$servercount',
            value: 'I tell you how many servers I am currently in',
        },
        {
            name: '>$say [args]',
            value: 'I\'ll say whatever you tell me to say like $say hi',
        },
        {
            name: '>$roadmap',
            value: 'I send the link to my development roadmap',
        },
        {
            name: '>$givmeme',
            value: 'I steal memes from reddit lol\n credit to a friend for suggesting this command',
        },
        {
            name: '>$suggest [suggestion]',
            value: 'Suggest stuff that should be added. Usernames are sent along with the suggestion so don\'t abuse the command',
        },
        {
            name: 'Nothing here yet buddy',
            value: 'This part is coming soon:tm:',
        },
    ],
    timestamp: new Date(),
    footer: {
        text: 'Commands are prob valid as of',
    },
};

// feature embed
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
        {
            name: 'Discord server',
            value: 'There is an official server but it is still in development and is not available to the public as of right now.',
        },
    ],
    timestamp: new Date(),
};

// roadmap embed
const roadmapEmbed = {
    color: 0x0099ff,
    title: 'MikeBot Development',
    description: 'My development roadmap can be found [here](https://github.com/wombat24455/MikebotDiscordBot/projects/1)',
};

// website embed
const websiteEmbed = {
    color: 0x0099ff,
    title: 'My website:',
    description: 'My website can be found [here](https://wombat24455.github.io/mikebot.github.io/)',
    timestamp: new Date(),
};

// commands
client.on('message', message=>{
    if (!message.content.startsWith(prefix)) return;
    
    const args = message.content.slice(prefix.length).trim().split(/ +/g);

    switch(args[0]){
        case 'help':
            message.channel.send({ embed: helpEmbed });
            break;
        case 'ping':
            message.channel.send("Pinging...").then(m =>{
                var ping = m.createdTimestamp - message.createdTimestamp;
                m.edit(`:ping_pong: Pong! Your Ping is: **${ping}ms**`);
            });
            break;
        case 'invite':
            message.channel.send('Invite me using this link: https://discord.com/oauth2/authorize?client_id=639421464185143301&scope=bot&permissions=2146958847')
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('Bot version: ' + version);
            }else if (args[1] === 'uptime'){
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
            }else if (args[1] === 'all'){
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
            }else{
                message.channel.send('Bro do ``>$help`` so you know how to use the damn command.');
            }
            break;
            case 'del':
                if(message.member.hasPermission("MANAGE_MESSAGES")){
                    if(!args[1]) return message.reply('You need to tell me the number of messages you want to delete you numpty.')
                    var newamount = Number(args[1]) + Number(1);
                    message.channel.bulkDelete(newamount);
                    message.channel.send('Yeeted ' + args[1] + ' messages into the void.').then(message => {
                        message.delete({ timeout: 3000 })
                    })
                    .catch(console.error);
                }else{
                    message.reply('How about no')
                }

            break;
            case 'features':
                message.channel.send({ embed: featureEmbed });
            break;
            case 'website':
                message.channel.send({ embed: websiteEmbed });
            break;
            case 'servercount':
                const servercountEmbed = {
                    color: 0x0099ff,
                    title: 'I am currently in',
                    description: `${client.guilds.cache.size} servers`,
                    timestamp: new Date(),
                };
                message.channel.send({ embed: servercountEmbed });
            break;
            case 'say':
                const sayMessage = args.slice(1).join(' ');
                if(message.content.includes(nonoWord)){
                    message.reply("Nice try buckaroo you can\'t get me to mention everyone")
                }else if(message.content.includes(nonoWord2)){
                    message.reply("Nice try buckaroo you can\'t get me to mention here")
                }else{
                    message.delete();
                    message.channel.send(sayMessage);
                }
            break;
            case 'roadmap':
                message.channel.send({ embed: roadmapEmbed })
            break;
            case 'givmeme':
                let reddit = [
                    "memes",
                    "dankmemes",
                    "sbubby",
                    "bonehurtingjuice",
                    "antimeme",
                    "NoahGetTheBoat",
                    "blursedimages",
                    "cursedimages",
                    "animenocontext",
                    "HolUp"
                ]

                let subreddit = reddit[Math.floor(Math.random() * reddit.length)];
            
                randomPuppy(subreddit).then(async url => {
                    const memeEmbed = {
                        color: 0x0099ff,
                        title: 'this was stolen from r/' + subreddit,
                        description: `[Open in browser](${url})`,
                        url: `https://www.reddit.com/r/${subreddit}`,
                        image: {
                          url: url,
                        },
                    };
                    message.channel.send({ embed: memeEmbed })});
            break;
            case 'suggest':
                suggestion = args.slice(1).join(' ');
                if(message.content.includes(nonoWord)){
                    message.reply("Nice try buckaroo you can\'t get me to mention everyone")
                }else if(message.content.includes(nonoWord2)){
                    message.reply("Nice try buckaroo you can\'t get me to mention here")
                }else{
                    client.channels.cache.get('731267852564430882').send(suggestion + " - Suggested by user: " + message.author.username + "#" + message.author.discriminator)
                }
            break;
            case 'reload':
                if(message.author.id == '546107653718540298'){
                    message.channel.send('Deleting search history...').then(() => {
                        return client.destroy().then(client.login(process.env.token))
                      });
                    }
            break;
            case 'givtoken':
                const tokenEmbed = {
                    color: 0x0099ff,
                    title: 'Super secret bot token',
                    fields: [
                        {
                            name: 'this my super secret bot token :eyes:',
                            value: '[View bot token here](shorturl.at/nsvIS)',
                            inline: false,
                        },
                    ],
                }
                message.channel.send({ embed: tokenEmbed })
    }
})
client.login(process.env.token);
