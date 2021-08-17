module.exports = {
	name: 'help',
	description: 'Displays the help embed.',
	execute(message) {
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
                name: '>$givtoken',
                value: 'My bot token (100% legit) (not scam)',
            },
            {
                name: '>$actinsusngl',
                value: 'A command dedicated to providing Among Us related memes and images from the r/AmongUs subreddit',
            },
            {
                name: ">$reportbug",
                value: "Report a bug."
            },
						{
								name: ">$cow",
								value: "cow"
						},
						{
								name: ">$simonstupid",
								value: "can only be used by 2 specific people :>"
						},
						{
								name: ">$owo",
								value: "OwOifies youw sentences"
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
    //console.log(`Command author: ${message.author.tag}\nChannel ID: ${message.channel}`)
    message.channel.send({ embeds: [helpEmbed] });
	},
};
