const Discord = require('discord.js');
const client = new Discord.Client()

// bot prefix
prefix = '$';

// bot version
// format: major.minor.patch
var version = '1.2.6';

// outputs in console when bot code is run
client.on('ready', () =>{
    console.log('Bot ready')
    console.log(`Server count: ${client.guilds.cache.size}`);
    client.user.setActivity("with dissapointment", { type: "WATCHING"});

})

// Extract the required classes from the discord.js module
const { Client, MessageEmbed } = require('discord.js');

// commands
client.on('message', message=>{
    if(!message.content.startsWith(prefix)) return;
    
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0]){
        case 'help':
            const helpEmbed = {
                color: 0x0099ff,
                title: 'MikeBot Command List',
                description: 'Here is the "huge" list of my commands lol',
                thumbnail: {
                    url: 'https://i.vgy.me/HnWKX3.png',
                },
                fields: [
                    {
                        name: '$ping',
                        value: 'I reply with the response time.. you already knew that already didn\'t ya',
                    },
                    {
                        name: '$invite',
                        value: 'I give you the link to add me to your server',
                    },
                    {
                        name: '$info [query]',
                        value: 'Available info about me (replace [query] with version or uptime)',
                    },
                    {
                        name: '$del [amount]',
                        value: 'I bulk delete the amount of messages you tell me to delete',
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
            
            message.channel.send({ embed: helpEmbed });
            break;
        case 'ping':
            var ping = Date.now() - message.createdTimestamp + " ms";
            message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`");
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
                let uptime = ` I have been awake for ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds!`;
                message.channel.send(uptime)
            }else{
                message.channel.send('Bro do ``$help`` so you know how to use the damn command.');
            }
            break;
            case 'del':
                if(!args[1]) return message.reply('You need to tell me the number of messages you want to delete you numpty.')
                    var newamount = Number(args[1]) + Number(1);
                    message.channel.bulkDelete(newamount);
                    message.channel.send('Deleted ' + args[1] + ' messages.').then(msg => {
                        msg.delete({ timeout: 3000 })
                    })
                    .catch(console.error);
            break;
    }
})
client.login(process.env.token);
