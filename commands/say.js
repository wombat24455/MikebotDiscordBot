const vars = require('../vars.js');
const everyone = vars.everyonePing;
const here = vars.herePing

module.exports = {
  name: 'say',
  description: 'Get MikeBot to say what you want.',
  execute(message, args) {
    const sayMessage = args.join(' ');

    if (message.content.includes(everyone)) {
      message.reply("I am not saying that >:(");
    } else if (message.content.includes(here)) {
      message.reply("I am not saying that >:(");
    } else {
      message.delete();
      message.channel.send(sayMessage);
    }
  }
}
