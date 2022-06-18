const Discord = require('discord.js');

module.exports = {
    name: "r.indirizzo",
    description: "ruoli indirizzo",
    aliases: [],
    onlyStaff: true,
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('RUOLI')
        const menu = new Discord.MessageSelectMenu()
        .setCustomId('menu2')
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder('CATEGORIA')
        .addOptions([
         {
             label: 'LICEO S.A',
             description: 'se frequenti il LICEO S.A clicca qui',
             value: '1',
             emoji: '🔬'
         },
         {
            label: 'ITIS INFORMATICA',
            description: 'se frequenti l\' ITIS INFORMATICA clicca qui',
            value: '2',
            emoji: '💻'
        },
        {
            label: 'ITIS ELETRONICA',
            description: 'se frequenti l\' ITIS ELETRONICA clicca qui',
            value: '3',
            emoji: '⚡'
        }
        ])
        const row = new Discord.MessageActionRow()
        .addComponents(menu)
        message.channel.send({embeds: [embed], components: [row]})
    }
    
}