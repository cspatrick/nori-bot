const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  if(mention == null){
  return message.channel.send('Proper Usage: +dm user message');
  }
  
  mention = message.mentions.users.first();
  mention.sendMessage(message.content);
  
 } catch (e){
   console.log(e);
 }

}
