const Discord = require('discord.js');

exports.run =  (client, message, args, ops) => {


  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    //.setDescription('don\'t ask me for help')
    .setDescription('+ping\n+roles\n+ascii\t[message]\n+poll\t[question]\n+scrabble\t[word]\n+wwf\t[word]\n+calc\t[equation]')
    .setAuthor('Nori Bot Commands', "https://imgur.com/nDAhzzg.png")

  message.channel.send(embed);
  
  //message.delete({timeout: 1000});
  

}
