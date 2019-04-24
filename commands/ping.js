const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('fk off');

  message.channel.send(embed);
	
  if (message.content === embed) { 
      var interval = setInterval (function () {
        message.channel.send("123")
      }, 1 * 5000); 
    } 
	
  message.delete({timeout: 5000});
  message.delete({timeout: 1000});
	
}
