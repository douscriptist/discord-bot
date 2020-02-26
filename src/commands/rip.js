const { Attachment } = require('discord.js');
module.exports = async (msg, args) => {
	const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
	// const attachment = new Attachment('https://www.pngfind.com/pngs/m/0-1987_png-file-svg-halloween-rip-transparent-png.png');
	msg.channel.send(attachment);
};
