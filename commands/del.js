module.exports = { 
	name: 'del',
	description: 'Deletes the amount of messages specified (limit of 100)',
	execute(message, args) { 
		if (message.member.permissions.has(Permissions.MANAGE_MESSAGES)) {
			if (!args[0]) {
				message.reply('You need to tell me the number of messages you want to delete you numpty.');
				return;
			}
			var newamount = Number(args[0]) + Number(1);
			message.channel.bulkDelete(newamount);
			message.channel.send('Yeeted ' + args[0] + ' messages into the void.').then(message => {
					message.delete({ timeout: 3000 });
				})
				.catch(console.error);
		} else {
			message.reply('How about no');
		}
	}
}
