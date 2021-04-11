module.exports = { //untuk mengaitakan file pada main.js
    name: 'youtube',
    description: "this is a ping command!",
    execute(message, args){
    //memulai command
        message.channel.send('Ma&Mon Channel');
    }
}