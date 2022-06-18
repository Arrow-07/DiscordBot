const Discord = require('discord.js');


module.exports = {
    name: "regole",
    description: "comando di test",
    aliases: [],
    onlyStaff: true,
    execute(message, args){
        if (!message.member.roles.cache.has("959156448422662174")) return
        
        const embed = new Discord.MessageEmbed()
        .setColor("DARK_GREEN")
        .setTitle('📜REGOLE📜')
        .addFields(
            {
                name: '>>> REGOLE ',
                value:`
                <@&959148858749911060>
                1- Non siate sessisti, razzisti, volgari ne nei confronti dei professori ne nei confronti degli altri
                
                 2- Meglio non parlare di politica o religione
                 
                 3- Sì alle discussioni animate, ma non litigate                
                 
                 4- Usate sempre il canale giusto per l'argomento di cui volete discutere
                
                 5- Rispettate gli <@&959156127382265946> e i <@&959156448422662174>              
                 
                 6- Non scrivete in maiuscolo, solo gli <@&959156127382265946> o i <@&959156448422662174> se necessario possono farlo               
                 
                 7- Non fate promozione o auto-promozione
                 
                 8- Nelle chat vocali non sovrapponete la vostra voce a quella degli altri

                 9- Laccesso al server è riservato agli studenti, ex studenti, prof e ex prof.
                `,
                inline: false
            },
            {
                name: '> Per ottenere l\'accesso alle chat leggi attentamente tutto il regolamento e conferma cliccando il 👍',
                value: '------------------------------------------------------------------------',
                inline: false
            },
            {
                name: '\u200b',
                value: '> Con il ruolo <@&959153371904884817> confermi di aver letto e compreso il regolamento',
                inline: false
            },
            {
                name: '*`Il regolamento non è nella sua forma finale. Ci reserviamo il diritto di poterlo aggiornare/cambiare in qualsiasi momento.`*',
                value: '\u200b',
                inline: false
            },
            )
            .setImage('https://www.iisvittuone.it/site/images/logo_new.png')
        const button1 = new Discord.MessageButton()
        .setEmoji('👍')
        .setStyle('SUCCESS')
        .setCustomId('b1')
        const button2 = new Discord.MessageButton()
        .setEmoji('👎')
        .setStyle("DANGER")
        .setCustomId('b2')
      
        const row = new Discord.MessageActionRow()
        .addComponents(button1, button2)
       
        message.channel.send({embeds: [embed], components: [row]})
    }
}