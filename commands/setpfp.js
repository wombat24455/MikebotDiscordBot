export const name = 'setpfp';
export const description = 'changes profile picture of bot (bot owner only)';
export function execute(message, args, client) {
  switch (message.author.id) {
    case '546107653718540298':
      newpfp = args.join(' ');
      client.user.setAvatar(newpfp);
      //console.log(newpfp)
      console.log(`Bot avatar set to ${newpfp}`);
      break;
    default:
      message.channel.send("no");
  }
}
