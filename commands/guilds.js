const index = require('../index');
const servers = index.guildNum;
const names = index.guildNames;

module.exports = {
    name: `guilds`,
    description: "I will (probably) list all the servers I am in",
    execute(message) {
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