export const name = 'say';
export const description = 'Get MikeBot to say what you want.';
export function execute(message, args) {
  import { everyonePing as _everyonePing } from '../vars.js';
  import { herePing as _herePing } from '../vars.js';
  import { fullUser as user } from '../vars.js';

  const everyone = _everyonePing;
  const here = _herePing;
  const sayMessage = args.join(' ');

  if (message.content.includes(everyone)) {
    message.delete();
    message.reply("I am not saying that >:(");
  } else if (message.content.includes(here)) {
    message.delete();
    message.reply("I am not saying that >:(");
  } else {
    message.delete();
    message.channel.send(sayMessage);
  }
}
