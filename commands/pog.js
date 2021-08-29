module.exports = { 
	name: 'pog',
	description: 'Pog',
	execute(message) {
        const pog = `pog`;
        message.channel.send(pog);
    }
}