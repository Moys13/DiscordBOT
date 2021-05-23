const {
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: 'help',
    description: 'ini adalah command help',
    execute(message, args) {
        if (!args[1]) {
            const helpembed = new MessageEmbed()
                .setColor('#fc0345')
                .setTitle('ke anggotaan RV')
                .addFields({
                    name: 'leader',
                    value: 'RvCherie',
                    inline: true
                }, {
                    name: 'Coleader',
                    value: 'blabla',
                    inline: true
                })
            message.channel.send(helpembed);
        }
    }
}