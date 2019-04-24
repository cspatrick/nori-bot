const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('fk off');

  message.channel.send(embed);
	
  message.delete({timeout: 1000});
	
  setTimeout(() => {
  message.channel.send('15 sec left to react or you will be removed from voice chat! \n Watch out for NOTS and dont spam options.');
	}, 15000);
	
}
