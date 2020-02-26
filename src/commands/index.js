const ping = require('./ping');
const fortune = require('./fortune');
const rip = require('./rip');

const guildID = '616587645732126742';
const channelID = '682339619353919628';

const commands = {
	ping,
	fortune,
	'8ball': fortune,
	rip
};

// EXAMPLE STRUCTURE
// const commands = {
// 	ping,
// 	'8ball': {
//     handler: eightBall,
//     aliases: []
//   }
// };

module.exports = async msg => {
	// console.log(msg);
	if (msg.guild.id === guildID && msg.channel.id === channelID) {
		const args = msg.content.split(' ');
		if (args.length == 0 || args[0].charAt(0) !== '!') return;
		const command = args.shift().substr(1);
		// console.log(command);

		if (Object.keys(commands).includes(command)) {
			commands[command](msg, args);
		}
	}
};
