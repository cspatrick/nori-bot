const Discord = require('discord.js');
exports.run = (client, message, args) => {
	const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('fk off');

  message.channel.send(embed);
	
  message.delete({timeout: 1000});
	
  var interval = setInterval (function () {
        message.channel.send("this is a test after 5 seconds")
      }, 1 * 5000);	
	
}
