// prevents @everyone and @here from being used in the messages
var everyonePing = '@everyone';
var herePing = '@here';

module.exports = {
  name: 'say',
  description: 'Get MikeBot to say what you want.',
  execute(message, args) {
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
  },
};
