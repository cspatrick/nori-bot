const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  //if(!args[0]) return message.channel.send('Proper Usage: <prefix>google');

  const embed = new Discord.RichEmbed()
    .setColor(16754843)
    //.setTitle('hope u lose')
    .setTitle('React or get moved out of voice chat!')



  let msg = await message.channel.send(embed);
  
  message.delete({timeout: 1000});
  
  await msg.react('1⃣');
  await msg.react('2⃣');
  await msg.react('3⃣');
  await msg.react('4️⃣');
  await msg.react('🇶');
  await msg.react('🇭');

 } catch (e){
   console.log(e);
 }

}
