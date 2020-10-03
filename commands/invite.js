module.exports = {
	name: 'invite',
	description: 'invite me using this pls',
	execute(message) {
    message.channel.send('Invite me using this link: https://discord.com/oauth2/authorize?client_id=639421464185143301&scope=bot&permissions=2146958847');
	},
};
