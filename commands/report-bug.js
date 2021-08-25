export const name = 'reportbug';
export const description = 'Let us know if you find any bugs with the bot using this command.';
export async function execute(message, args, client) {
    function prompt(message, msg) {
        const filter = (response) => response.author.id === message.author.id;
        message.channel.send(msg);
        return message.channel.awaitMessages(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const content = collected.first().content;
                return content;
            })
            .catch(_ => {
                console.log(_);
                return message.channel.send("You ran out of time! (1m)");
            });
    };
    //remove this if the commandName isnt in the arguments
    let reportBugArgs = args.slice(1);

    if (!reportBugArgs || reportBugArgs.length == 0) {

        let bug = await prompt(message, "What is the bug?");
        while (bug.length > 1024) {
            bug = await prompt(message, "Please shorten the bug to 1024 characters or shorter.");
        }

        let desc = await prompt(message, "Please explain the bug or steps to reproduce.");
        while (desc.length > 1024) {
            desc = await prompt(message, "Please shorten the description to 1024 characters or shorter.");
        }

        const reportEmbed = {
            color: 0xff0800,
            title: 'Bug Report',
            fields: [
                {
                    name: 'Bug',
                    value: bug,
                },
                {
                    name: 'Description/Steps to produce',
                    value: desc,
                    inline: false,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: message.author.tag,
            },
        };
        client.channels.cache.get('731267961435717642').send({ embeds: [reportEmbed] });
        message.channel.send("Reported!");
    } else {
        let bug = reportBugArgs.join(" ");
        const desc = await prompt(message, "Please explain the bug or steps to reproduce.");
        if (desc.length > 1024)
            return message.channel.send("Please shorten the description to 1024 characters or shorter.");
        const reportEmbed = {
            color: 0xff0800,
            title: 'Bug Report',
            fields: [
                {
                    name: 'Bug',
                    value: bug,
                },
                {
                    name: 'Description/Steps to produce',
                    value: desc,
                    inline: false,
                },
            ],
            timestamp: new Date(),
            footer: {
                text: message.author.tag,
            },
        };
        client.channels.cache.get('731267961435717642').send({ embeds: [reportEmbed] });
        message.channel.send("Reported!");
    }
}
