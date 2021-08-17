module.exports = {
	name: 'ping',
	description: 'yeah idk how this works',
	execute(message) {
    message.channel.send("Pinging...").then(msg => {
        msg.edit(`Roundtrip latency: **${msg.createdTimestamp - message.createdTimestamp}**ms\nWebsocket heartbeat: **${client.ws.ping}**ms.`); //not sure if client.ws.ping will work
    });
	},
};
