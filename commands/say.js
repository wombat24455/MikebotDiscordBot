// prevents @everyone and @here from being used in the messages
var everyonePing = '@everyone';
var herePing = '@here';

export const name = 'say';
export const description = 'Get MikeBot to say what you want.';
export function execute(message, args) {
  const sayMessage = args.join(' ');
  if (message.content.includes(everyonePing)) {
    message.delete();
    message.reply("I am not saying that >:(");
  } else if (message.content.includes(herePing)) {
    message.delete();
    message.reply("I am not saying that >:(");
  } else {
    message.delete();
    message.channel.send(sayMessage);
  }
}
