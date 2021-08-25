export const name = 'cow1';
export const description = 'gets memes from r/AmongUs';
export function execute(message) {
  message.reply('It broked D:');
  /*
  import randomPuppy from 'random-puppy';

  let amongUsSubreddit = "AmongUs";
  randomPuppy(amongUsSubreddit).then(async (url) => {
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
  */
}
