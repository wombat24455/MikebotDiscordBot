module.exports = {
	name: 'ping',
	description: 'yeah idk how this works',
	execute(message, client) {
    message.channel.send("Pinging...").then(m => {
        m.edit(`Roundtrip latency: **${m.createdTimestamp - message.createdTimestamp}ms**\nWebsocket heartbeat: ${client.ws.ping}**ms.`);
    });
	},
};
