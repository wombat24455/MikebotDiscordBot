const { Client } = require("discord.js");

module.exports = {
	name: 'ping',
	description: 'yeah idk how this works',
	execute(message, client) {
    message.channel.send("Pinging...").then(m => {
        m.edit(`Roundtrip latency: \`${m.createdTimestamp - message.createdTimestamp}ms\`\nAPI Latency: \`${Math.round(client.ws.ping)}ms\``);
    });
	},
};
