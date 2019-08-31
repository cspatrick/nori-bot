const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {

try{
  if(mention == null){
  return message.channel.send('Proper Usage: +dm user message');
  }
  
  mention = message.mentions.users.first();
  mentionMessage = message.content.slice (8);
  mention.sendMessage(mentionMessage);
  
 } catch (e){
   console.log(e);
 }

}
