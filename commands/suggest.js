export const name = 'suggest';
export const description = 'Allows you to send suggestions to the MikeBot discord server';
export function execute(message, args, client) {
    import { everyonePing as _everyonePing } from '../vars.js';
    import { herePing as _herePing } from '../vars.js';
    import { fullUser as user } from '../vars.js';

    const everyone = _everyonePing;
    const here = _herePing;

    suggestion = args.join(' ');
    if (message.content.includes(everyone)) {
        message.reply("Nice try buckaroo you can't get me to mention everyone");
    } else if (message.content.includes(here)) {
        message.reply("Nice try buckaroo you can't get me to mention here");
    } else {
        client.channels.cache.get('731267852564430882').send(`${suggestion} - Suggested by user: ${fullUser}`);
    }
}
