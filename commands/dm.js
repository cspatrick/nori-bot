const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
  
  mention = message.mentions.users.first();
  
  try{
    if(!args[0] || mention == null){
    return message.channel.send('Proper Usage: +dm user message');
    }
    
  message.delete();
  msg = message.content.slice(26);
  mention.sendMessage(msg);
  
 } catch (e){
   console.log(e);
 }

}
