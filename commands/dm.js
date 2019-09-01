const Discord = require('discord.js');

exports.run = async (client, message, args, ops) => {
  
  mention = message.mentions.users.first();
  
  try{
    if(!args[0] || mention == null){
      return message.channel.send('Proper Usage: +dm user message');
    }
    
  if(message.author.id == '542873293246693413' && message.content.includes("Proper Usage")){
     message.delete(5000);
     return;
     }
    
  message.delete();
    
  if(message.member.roles.has('480870558720851998')){
    msg = message.content.slice(26);
    mention.sendMessage(msg);
  }
  else{
    message.channel.send('Hey man you cant use that!');
  }
  
 } catch (e){
   console.log(e);
 }

}
