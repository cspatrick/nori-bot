const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '+';
const ownerID = '275814889430188032';
let status = 'for +help';
//let status = 'with Patrick 💕';

client.on('ready', () =>{

  
    client.user.setPresence({game: {name: status , type: 3}, status: 'online'});

    //client.user.setPresence({activity: {name: status }, status: 'online'});

});

client.on('message', async message => {

	let args = message.content.slice(prefix.length).trim().split(' ');
	let cmd = args.shift().toLowerCase();
  
  if (message.channel.id === '570803215310782480' && message.content.substring(0,5) != '+pay' && !message.author.bot){
  	message.delete({timeout: 1000});
  }
	
  /*if(message.author.id == '275813544191328266'){
  message.react('400851460235067392');
  }*/
	
  const test = new Discord.RichEmbed()
    .setColor(16754843)
    .setTitle('nots!');
	
  if((message.content.includes("(") || message.content.includes(")") || message.content.includes("<:parenthesis:602010917450022922>")) 
  && !message.member.roles.equals("503792240569876511") 
  && message.channel.id === '503351506205016105' && message.author.id == '160755148250021889'){
  	message.delete(2000);
  	message.channel.send("shut up");
  	return;
  }
	
  /*if(message.author.id == '542873293246693413' && message.content.includes("shut up")){
  	message.delete(2000);
  	return;
  }*/
	
  if(message.content.includes("bots") ){
  	message.channel.send(test);
  	return;
  }
	
  /*if(message.content.includes("XD") ){
  	message.delete({timeout: 1000});
  	return;
  }*/
  
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;



	try {
		delete require.cache[require.resolve(`./commands/${cmd}.js`)];

    let ops = {
      ownerID: ownerID
    }

		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args, ops);

	} catch (e) {
		console.log(e.stack);
	}

});


client.on('ready', () => console.log('Launched!'));


client.login(process.env.BOT_TOKEN);
//hi
