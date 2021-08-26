/* Ping vars */
var everyonePing = '@everyone';
var herePing = '@here';
/* Ping vars */

/* User vars */
var user = `${message.author.username}`;
var discriminator = `${message.author.discriminator}`;
var fullUser = `${message.author.username}${message.author.discriminator}`;
/* User vars */

/* Uptime vars */
let totalSeconds = (client.uptime / 1000);
let days = Math.floor(totalSeconds / 86400);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
let botUptime = `${days}d, ${hours}h, ${minutes}m and ${seconds}s`;
/* Uptime vars */