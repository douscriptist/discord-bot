module.exports = async (msg, args) => {
	await msg.reply('Classical PONG -reply- message.');
	await msg.channel.send('Classical PONG -channel.send()- message.');
	console.log('msg replied (SENT)');
	console.log(msg.channel.status);
	console.log(args.status);
};
