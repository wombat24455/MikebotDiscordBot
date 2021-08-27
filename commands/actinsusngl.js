const randomPuppy = require('random-puppy');

module.exports = {
  name: 'actinsusngl',
  description: 'sussy baka',
  execute(message) {
    amongUsSubreddit = "AmongUs";
    randomPuppy(amongUsSubreddit).then(async url => {
      const amongUsmemeEmbed = {
        color: 0x0099ff,
        title: 'this was stolen from r/' + amongUsSubreddit,
        description: `[Open in browser](${url})`,
        url: `https://www.reddit.com/r/${amongUsSubreddit}`,
        attachment: {
          url: url,
        },
      };
      message.channel.send({ embeds: [amongUsmemeEmbed] });
    });
  }
}
