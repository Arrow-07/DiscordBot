const Discord = require('discord.js');


module.exports = {
    name: "r.anno",
    description: "ruoli anno scolastico",
    aliases: [],
    onlyStaff: true,
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('RUOLI')
        const menu = new Discord.MessageSelectMenu()
        .setCustomId('menu')
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder('CATEGORIA')
        .addOptions([
         {
             label: 'PRIMA (I)',
             description: 'se sei di prima clicca qui',
             value: '1',
             emoji: '1️⃣'
         },
         {
            label: 'SECONDA (II)',
            description: 'se sei di seconda clicca qui',
            value: '2',
            emoji: '2️⃣'
        },
        {
            label: 'TERZA (III)',
            description: 'se sei di terza clicca qui',
            value: '3',
            emoji: '3️⃣'
        },
        {
            label: 'QUARTA (IV)',
            description: 'se sei di quarta clicca qui',
            value: '4',
            emoji: '4️⃣'
        },
        {
            label: 'QUINTA (V)',
            description: 'se sei di quinta clicca qui',
            value: '5',
            emoji: '5️⃣'
        },
        ])
        const row = new Discord.MessageActionRow()
        .addComponents(menu)
        message.channel.send({embeds: [embed], components: [row]})
    }
}