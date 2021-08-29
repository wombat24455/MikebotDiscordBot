module.exports = {
    name: 'help',
	description: 'Displays the help embed.',
	execute(message) {
        const helpEmbed = {
            color: 0x0099ff,
            title: 'MikeBot Command List',
            description: 'Here is the "huge" list of my commands lol',
            thumbnail: {
                url: 'https://i.vgy.me/HnWKX3.png',
            },
            fields: [{
                    name: 'get to know me ;)',
                    value: '```>$invite\n>$info [query]\n>$givtoken\n>$servercount\n>$website\n>$roadmap```',
                },
                {
                    name: 'help fix my sh*t',
                    value: '```>$reportbug\n>$suggest [suggestion]```',
                    inline: true,
                },
                {
                    name: 'funny haha',
                    value: '```>$givmeme\n>$actinsusngl\n>$cow```',
                    inline: true,
                },
                {
                    name: 'general commands',
                    value: '```>$say [args]```',
                    inline: true,
                },
                {
                    name: 'degenerate sh*t',
                    value: '```>$owo```',
                    inline: true,
                },
                {
                    name: 'kinda useless sh*t',
                    value: '```>$ping\n>$features```',
                    inline: true,
                },
                {
                    name: 'server moderation',
                    value: '```>$del [amount]```',
                    inline: true,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: 'Commands are prob valid as of',
            },
        };
        //console.log(`Command author: ${message.author.tag}\nChannel ID: ${message.channel}`)
        message.channel.send({ embeds: [helpEmbed] });
    }
}
