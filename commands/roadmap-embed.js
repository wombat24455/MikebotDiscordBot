export const name = 'roadmap';
export const description = 'Displays an embed that has the link to the roadmap';
export function execute(message) {
    const roadmapEmbed = {
        color: 0x0099ff,
        title: 'MikeBot Development',
        description: 'My development roadmap can be found [here](https://github.com/wombat24455/MikebotDiscordBot/projects/1)',
    };
    message.channel.send({ embeds: [roadmapEmbed] });
}
