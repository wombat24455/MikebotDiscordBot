const randomPuppy = require('random-puppy');

module.exports = {
	name: 'actinsusngl',
	description: 'gets memes from r/AmongUs',
	execute(message) {
    let amongUsSubreddit = "AmongUs";
    randomPuppy(amongUsSubreddit).then(async url => {
        const amongUsmemeEmbed = {
            color: 0x0099ff,
            title: 'this was stolen from r/' + amongUsSubreddit,
            description: `[Open in browser](${url})`,
            url: `https://www.reddit.com/r/${amongUsSubreddit}`,
            image: {
                url: url,
            },
        };
       // message.channel.send({ embed: amongUsmemeEmbed });
       channel.send({ embeds: [exampleEmbed] });
    });
	},
};
