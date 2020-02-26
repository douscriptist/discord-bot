const fortune = [
	'As I see it, yes.',
	'Ask again later.',
	'Better not tell you now.',
	'Cannot predict now.',
	'Concentrate and ask again.',
	'Don’t count on it.',
	'It is certain.',
	'It is decidedly so.',
	'Most likely.',
	'My reply is no.',
	'My sources say no.',
	'Outlook not so good.',
	'Outlook good.',
	'Reply hazy, try again.',
	'Signs point to yes.',
	'Very doubtful.',
	'Without a doubt.',
	'Yes.',
	'Yes – definitely.',
	'You may rely on it.'
];

module.exports = async (msg, args) => {
	// let regex = /^!fortune\s.+/i;
	//   if (regex.exec(msg.content)) {
	if (!args.length) return;
	const index = Math.floor(Math.random() * fortune.length);
	const predict = fortune[index];
	await msg.channel.send(`${msg.author} ${predict} 👀`);
	// }
};
