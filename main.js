const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'rv:'//awal pesan dari command prefix=revo:

//////membuat command menggunakan file/ mengaitkan file//////
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`); // mengaitkan file commands.js
    client.commands.set(command.name, command);
}
/////////////////////////////////////////////////////////////

client.once('ready', () => {
    console.log('Revolusioner is online!');
});

//untuk memulai Command.
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return; //jika pesan tidak di awali prefix.

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //Command-Command BOT tanpa menggunkan file
    /*if(command === 'youtube'){
        message.channel.send('Ma&Mon Channel'); //mengirim pesan ke Channel
    }else if(command === 'leader'){
        message.channel.send('MaCherie');
    }*/

    //Cara 1 untuk memanggil command pada file
    if(command === 'youtube'){
        client.commands.get('youtube').execute(message, args); //untuk memanggil dari file youtube.js
    }else if(command == 'leader'){
        client.commands.get('leader').execute(message, args);
    }

});

client.login('ODMwNTAwODc3NjUwODg2Njg4.YHHmNw._0WLyawZKiAah-vm6wmUr1CL2tk');