module.exports = {
	name: 'suggest',
	description: 'Allows you to send suggestions to the MikeBot discord server',
	execute(message, args, client) {
        const vars = require('../vars.js');
        const everyone = vars.everyonePing;
        const here = vars.herePing
		const fullUser = `${message.author.username}#${message.author.discriminator}`;
        const suggestion = args.join(' ');

        if (message.content.includes(everyone)) {
            message.reply("Nice try buckaroo you can't get me to mention everyone");
        } else if (message.content.includes(here)) {
            message.reply("Nice try buckaroo you can't get me to mention here");
        } else {
            client.channels.cache.get('731267852564430882').send(`${suggestion} - Suggested by user: ${fullUser}`);
        }
    }
}
