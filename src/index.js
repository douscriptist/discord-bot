const Discord = require('discord.js');
const commands = require('./commands');
require('dotenv').config();

const client = new Discord.Client();

client.once('ready', () => {
	console.log(
		'Hello, now bot is ready and live...\n -This is basic and learning based bot, know that. 😃'
	);
});

client.on('message', commands);

client.login(process.env.BOT_TOKEN);
