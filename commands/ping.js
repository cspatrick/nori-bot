const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('fk off');

  message.channel.send(embed);
	
  message.delete({timeout: 1000});
	
  if (message.content == "fk off") { 
      var interval = setInterval (function () {
        message.channel.send("123")
      }, 1 * 5000); 
    }
	
}
