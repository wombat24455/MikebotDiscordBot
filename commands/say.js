// prevents @everyone and @here from being used in the messages
var everyonePing = '@everyone';
var herePing = '@here';

module.exports = {
  name: 'say',
  description: 'Get MikeBot to say what you want.',
  execute(message, args) {
    const sayMessage = args.join(' ');
		/*
    if (message.content.includes(everyonePing || herePing)) {
      message.delete();
      message.reply("I am not saying that >:(");
    } else {
      message.delete();
      message.channel.send(sayMessage);
    }
		*/

    switch (message.content.includes()) {
      case everyonePing:
        message.delete();
        message.reply("I am not saying that >:(");
				break;
			case herePing:
				message.delete();
				message.reply("I am not saying that >:(");
				break;
			default:
				message.delete();
				message.channel.send(sayMessage);
				break;
    }
  },
};
