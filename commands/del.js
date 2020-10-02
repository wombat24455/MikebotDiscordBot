module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
    if (message.member.hasPermission("MANAGE_MESSAGES")) {
        if (!args[1]) return message.reply('You need to tell me the number of messages you want to delete you numpty.')
        var newamount = Number(args[1]) + Number(1);
        message.channel.bulkDelete(newamount);
        message.channel.send('Yeeted ' + args[1] + ' messages into the void.').then(message => {
            message.delete({ timeout: 3000 });
        })
            .catch(console.error);
    } else {
        message.reply('How about no');
    };
	},
};
