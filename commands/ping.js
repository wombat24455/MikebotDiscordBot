export const name = 'ping';
export const description = 'yeah idk how this works';
export function execute(message, client) {
	console.log(client);
	message.channel.send("Pinging...").then(m => {
		m.edit(`Roundtrip latency: \`${m.createdTimestamp - message.createdTimestamp}ms\`\nAPI Latency: \`${Math.round(client.ws.ping)}ms\``);
	});
}
