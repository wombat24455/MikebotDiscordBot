export const name = 'actinsusngl';
export const description = 'sussy';
export function execute(message) {
  import randomPuppy from 'random-puppy';

  randomPuppy("AmongUs").then(async (url) => {
    const amongUsmemeEmbed = {
      color: 0x0099ff,
      title: 'this was stolen from r/' + amongUsSubreddit,
      description: `[Open in browser](${url})`,
      url: `https://www.reddit.com/r/${amongUsSubreddit}`,
      image: {
        url: url,
      },
    };
    message.channel.send({eds: [amongUsmemeEmbed]});
  });
}
