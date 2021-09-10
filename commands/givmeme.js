const randomPuppy = require('random-puppy');

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
			"blursedimages",
			"HolUp",
			"engrish",
			"skamtebord",
			"shitposting"
		];

		let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

		randomPuppy(subreddit).then(async (url) => {
			const memeEmbed = {
				color: 0x0099ff,
				title: 'this was stolen from r/' + subreddit,
				description: `[Open in browser](${url})`,
				url: `https://www.reddit.com/r/${subreddit}`,
				image: {
					url: url,
				},
			}
			message.channel.send({ embeds: [memeEmbed] });
		})
	}
}
