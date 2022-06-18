const Discord = require('discord.js');
module.exports = {
    name: "ping",
    description: "ping bot",
    aliases: ["test"],
    onlyStaff: false,
    execute(message, args){
    var embed = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)

        message.channel.send({embeds: [embed]})
        
    }
}