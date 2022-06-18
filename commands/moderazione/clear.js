const Discord = require('discord.js');


module.exports = {
    name: "clear",
    description: "comando clear",
    aliases: [],
    onlyStaff: false,
    execute(message, args){
         if (!message.member.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non hai il permesso').then(msg => {
                setTimeout(() => msg.delete(), 5000)
            })
        }
        if (!message.guild.me.permissions.has("MANAGE_MESSAGES")) {
            return message.channel.send('Non ho il permesso').then(msg => {
                setTimeout(() => msg.delete(), 5000)
            })
        }
        var count = parseInt(message.content.split(/\s+/)[1]);
        if (!count) {
            return message.channel.send("Inserisci un numero valido").then(msg => {
                setTimeout(() => msg.delete(), 5000)
            })
        }
        if (count > 100) {
            return message.channel.send("Non puoi cancellare più di 100 messaggi").then(msg => {
                setTimeout(() => msg.delete(), 5000)
            })
        }
        message.channel.bulkDelete(count, true)
        message.channel.send(count + " messaggi eliminati").then(msg => {
            setTimeout(() => msg.delete(), 5000)
        })
    }
}
   
       