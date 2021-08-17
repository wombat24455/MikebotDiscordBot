module.exports = {
	name: 'ping',
	description: 'yeah idk how this works',
	execute(message) {
    message.channel.send("Pinging...").then(m => {
        var ping = m.createdTimestamp - message.createdTimestamp;
        m.edit(`Roundtrip latency: **${m.createdTimestamp - message.createdTimestamp}ms**\nWebsocket heartbeat: ${client.ws.ping}ms.`);
    });
	},
};
