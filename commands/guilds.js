
module.exports = {
    name: `guilds`,
    description: "I will (probably) list all the servers I am in",
    execute(message, client) {
      const servers = client.guilds.cache.size;
      const names = client.guilds.cache.map(g => g.name).join("\n");

      const ghEmbed = {
        color: 0x0099ff,
        title: "I am in",
        fields: [
          {
            name: `${servers} servers`,
            value: `${names}`,
          },
        ],
        timestamp: new Date(),
      };
      
      message.channel.send({ embeds: [ghEmbed] });
    },
};