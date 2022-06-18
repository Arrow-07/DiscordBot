const Discord = require('discord.js');
module.exports = {
    name: "messageCreate",
    execute(message) {
      
        if(message.content.includes("https://") || message.content.includes("http://")) {
            var testo = message.content;
            message.delete()
            var embed = new Discord.MessageEmbed()
                .setTitle(":x: **INFRAZIONE**")
                .setColor("RED")
                .setDescription(`**\n${testo}**`)
                .addField(':warning: non puoi mandare link nel server stai piu attento la prossima volta 🙂', '@here', false )
                .setTimestamp()
        
           message.author.send({ embeds: [embed] })
        }
          
    }
}
