const Discord = require('discord.js');
module.exports = {
    name: "warn",
    description: "warn",
    aliases: [],
    onlyStaff: false,
    execute(message, args){
        const idRuoloWarn1 = '999379652932018256'
        const idRuoloWarn2 = '999382552190144552'
        let utente = message.mentions.members.first();
    if (!member.roles.cache.has('959156448422662174')) {
        return message.channel.send('Non hai il permesso');
    }
    if (!utente) {
        return message.channel.send('Non hai menzionato nessun utente');
    }
    let reason = message.content.split(/ +/).slice(2).join(" ");
    if (!reason) {
        return message.channel.send('Non hai specificato la motivazione del warn');
    }

    if (utente.roles.cache.has(idRuoloWarn1)) {
        utente.roles.remove(idRuoloWarn1);
        utente.roles.add(idRuoloWarn2);

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} warnato`)
            .setColor('RED')
            .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nUn altro warn e l'utente verrà bannato`)
        message.channel.send({ embeds: [embed] })
    }
    else if (utente.roles.cache.has(idRuoloWarn2)) {
        utente.roles.remove(idRuoloWarn2);
        utente.ban()

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} warnato`)
            .setColor('DARK_RED') 
            .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nL'utente è stato bannato poichè ha raggiunto i 3 warn`)
        message.channel.send({ embeds: [embed] })
    }
    else {
        utente.roles.add(idRuoloWarn1);

        let embed = new Discord.MessageEmbed()
            .setTitle(`${utente.user.username} warnato`)
            .setColor('ORANGE') 
            .setDescription(`Utente warnato da ${message.author.toString()} per "**${reason}**"\nAltri 2 warn e l'utente verrà bannato`)
        message.channel.send({ embeds: [embed] })
    }
}
}