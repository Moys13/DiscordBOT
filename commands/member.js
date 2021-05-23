const {
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: 'member',
    description: 'ini commands untuk mengetahui member',
    execute(message) {
        const memberembed = new MessageEmbed()
            .setColor('#0099ff')
            .addFields({
                name: 'percobaan 1',
                value: 'ini adalah percobaa 1'
            }, {
                name: '\u200B',
                value: '\u200B'
            }, {
                name: 'percobaan 2',
                value: 'ini adalah pecobaan 2',
                inline: true
            }, {
                name: 'percobaan 3',
                value: 'ini adalah percobaan 3',
                inline: true
            }, )
        message.channel.send(memberembed);
    }
}