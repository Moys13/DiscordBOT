const Discord = require('discord.js');

const bot = new Discord.Client;

//token Discord
const token = 'ODMwNTAwODc3NjUwODg2Njg4.YHHmNw._0WLyawZKiAah-vm6wmUr1CL2tk';
bot.login(token);

//Awal penyebutan dari commands 
var prefix = 'rv: '

//////membuat command menggunakan file/ mengaitkan file//////
const fs = require('fs');
const commands = new Discord.Collection();
const files = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of files) {
    const command = require(`./commands/${file}`);
    commands.set(command.name, command)
}

//Jika bot nya online akan ada tulisan di terminal
bot.once('ready', () => {
    console.log('Bot telah online!')
})

//Memulai Commands
bot.on('message', message => {
    let args = message.content.substring(prefix.length).split(' ');

    switch (args[0]) {
        case 'ping':
            commands.get('ping').execute(message);
            break;
        case 'help':
            commands.get('help').execute(message, args);
            break;
            //Case command Emmbed
        case 'member':
            commands.get('member').execute(message);
            break;
        case 'clear':
            commands.get('clear').execute(message, args);
            break;
    }
});