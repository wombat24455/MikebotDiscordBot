module.exports = {
	name: 'simonstupid',
	description: 'can only be used by 2 specific people :>',
	execute(message) {
    if (message.author.id == '375990913870200833' || '546107653718540298') {
        message.reply('you are stupoid stinky horse i hat you >: (');
    }
	},
};
