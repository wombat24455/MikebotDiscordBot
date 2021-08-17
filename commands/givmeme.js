const randomPuppy = require('random-puppy'); //will probably be moved to a seperate file at some point

module.exports = {
	name: 'givmeme',
	description: 'Gets a meme/image from the one of the subreddits in the list',
	execute(message) {
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
    ];

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
			message.channel.send({ embeds: [memeEmbed] });
		});
		},
};
