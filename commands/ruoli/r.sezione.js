const Discord = require('discord.js');


module.exports = {
    name: "r.sezione",
    description: "ruoli sezione",
    aliases: [],
    onlyStaff: true,
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('RUOLI')
        const menu = new Discord.MessageSelectMenu()
        .setCustomId('menu1')
        .setMaxValues(1)
        .setMinValues(1)
        .setPlaceholder('scegli la tua sezione')
        .addOptions([
         {
             label: 'A',
             description: 'se sei della A clicca qui',
             value: '1',
             emoji: '🇦'
         },
         {
            label: 'B',
            description: 'se sei della B clicca qui',
            value: '2',
            emoji: '🇧'
        },
        {
            label: 'C',
            description: 'se sei della C clicca qui',
            value: '3',
            emoji: '🇨'
        },
        {
            label: 'D',
            description: 'se sei della D clicca qui',
            value: '4',
            emoji: '🇩'
        },
        {
            label: 'E',
            description: 'se sei della E clicca qui',
            value: '5',
            emoji: '🇪'
        },
        ])
        const row = new Discord.MessageActionRow()
        .addComponents(menu)
        message.channel.send({embeds: [embed], components: [row]})
    }
}