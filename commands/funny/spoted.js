const Discord = require('discord.js');


module.exports = {
    name: "spoted",
    description: "spottare gente",
    aliases: ["spo"],
    onlyStaff: false,
    execute(message, args){
        if(message.channel.id != "964927790954725478") return
        var args = message.content.split(/\s+/);
        var testo;
        testo = args.slice(1).join(" ");
        if (!testo) {
            return message.delete(), message.channel.send("Inserire un Messaggio").then(msg => {
                setTimeout(() => msg.delete(), 5000)})
        }
        
        message.delete()
        var embed = new Discord.MessageEmbed()
            .setTitle("CERCO:")
            .setColor("BLACK")
            .setDescription(`**\n${testo}**`)
            .addField('lo conoscete?', '@here', false )
            .setFooter({text: "testo"})
            .setTimestamp()

            message.channel.send({ embeds: [embed] })
    }
}