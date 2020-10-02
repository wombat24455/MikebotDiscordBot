module.exports = {
	name: 'reload',
	description: 'Reloads the bot',
	execute(message) {
    if (message.author.id == '546107653718540298') {
        message.channel.send('Deleting search history...').then(() => {
            return client.destroy().then(client.login(process.env.token));
        });
    }
	},
};
