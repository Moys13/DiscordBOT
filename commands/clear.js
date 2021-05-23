module.exports = {
    name: 'clear',
    description: 'ini adalah commands untuk menghapus pesan',
    execute(message, args) {
        if (args[1]) {
            message.channel.bulkDelete(args[1]);
        } else {
            message.reply('masukan berapa pesan yang mau di hapus!');
        }
    }

}