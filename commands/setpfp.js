module.exports = {
  name: 'setpfp',
  description: 'changes profile picture of bot (bot owner only)',
  execute(message, args/*, client*/) {
    switch (message.author.id) {
      case '546107653718540298':
        newpfp = args.join(' ');
        client.user.setAvatar(newpfp);
        //console.log(newpfp)
        console.log("new avatar set!");
        break;
      default:
        message.channel.send("no");
    }
  },
};
