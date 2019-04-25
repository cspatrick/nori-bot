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
	
  if(message.author.username == 'patrickk'){
  message.react('<:troll:548643003691171850>');
  }
	
  if(message.content.includes("XD") ){
  message.delete({timeout: 1000});
  return;
  }
  
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
