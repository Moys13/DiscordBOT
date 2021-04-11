module.exports = { //untuk mengaitakan file pada main.js
    name: 'leader',
    description: "ini adalah Command mengetahui leader!",
    execute(message, args){
    //memulai Command
        
        let role = message.member.roles.cache.some(r => r.name === "Owner");
    //message.member.roles.cache.some(r => r.name === "Owner")// //memanggil roles menggunakan nama.
        if(message.member.roles.cache.some(r => r.name === "Owner")){ //memanggil roles code dan menyambungkannya.
            message.channel.send('MaCherie');
        }else{
            message.channel.send('kamu tidak di izinkan menggunakan perintah ini!');
            message.member.roles.add(role).catch(console.error); //untuk menambahkan anggtoa ke Roles tersebut
        //message.member.roles.remove('830651832430886934');// //untuk menghapus anggtoa di Roles tersebut
        }
    }
}