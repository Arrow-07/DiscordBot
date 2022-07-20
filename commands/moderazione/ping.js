const Discord = require('discord.js');
module.exports = {
    name: "ping",
    description: "ping bot",
    aliases: ["test"],
    onlyStaff: false,
    execute(message, args){
        var ping = client.ws.ping
       if(ping > 119){
        var embed = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)
            .setColor('RED') 
            message.channel.send({embeds: [embed]})
       }
       else if(ping > 59 && ping < 120){
        var embed1 = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)
            .setColor('ORANGE') 
            message.channel.send({embeds: [embed1]})
       }
       else if(ping < 60){
        var embed2 = new Discord.MessageEmbed()
            .setTitle("Ping del bot")
            .setDescription("Ecco la latenza del bot")
            .addField("Ping", `${client.ws.ping}ms`)
            .setColor('GREEN') 
            message.channel.send({embeds: [embed2]})
       }
        

       
        
    }
}