const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
  
  mention = message.mentions.users.first();
  
  try{
    if(!args[0] || mention == null){
    return message.channel.send('Proper Usage: +dm user message');
    }
    
  message.delete();
    
  if(message.author.roles.has('480870558720851998'){
    msg = message.content.slice(26);
    mention.sendMessage(msg);
  }
  else{
    message.channel.send('You cant use that!');
  }
  
 } catch (e){
   console.log(e);
 }

}
