const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  if(!args[0]) return message.channel.send('Proper Usage: <prefix>pay text');

  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    .setFooter(`by ${message.author.username}`)
    .addField('Did you win?', args.join(' '))
    //.setDescription(args.join(' '))

  let msg = await message.channel.send(embed);
  
  message.delete({timeout: 1000});
  
  await msg.react('👍');
  await msg.react('👎');
  await msg.react('🤷');


 } catch (e){
   console.log(e);
 }

}
