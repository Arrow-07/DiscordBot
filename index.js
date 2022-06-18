const Discord = require('discord.js');
global.client = new Discord.Client({ intents: ['DIRECT_MESSAGES', 'DIRECT_MESSAGE_TYPING', 'DIRECT_MESSAGE_REACTIONS', 'GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_INTEGRATIONS', ], partials: ['MESSAGE', 'CHANNEL', 'REACTION']})


client.login("OTY0OTU1MzA1ODU3Mzg0NDQ4.YlsKqA.dCqSnZLK4n4Xu4eqpP-AY-gKz6A");

const fs = require('fs');

client.commands= new Discord.Collection();

//file
const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for (const file of commandsFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
//cartelle
const commandsFolder = fs.readdirSync("./commands");
for (const folder of commandsFolder) {
    const commandsFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith(".js"));
    for (const file of commandsFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}
//eventi
const eventsFiles = fs.readdirSync("./events").filter(file => file.endsWith(".js"));
for (const file of eventsFiles) {
    const event = require(`./events/${file}`);
    client.on(event.name, (...args) => event.execute(...args))
}

//eseguire comando
client.on("messageCreate", message => {
    const prefix = "!";
    if(!message.content.startsWith(prefix)) return
    
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if(!client.commands.has(command) && !client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))) return

    var comando = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command))
    
    if (comando.onlyStaff) {
        if (!message.member.permissions.has('ADMINISTRATOR')){
            return message.channel.send("Non puoi eseguire questo comando perchè non hai il permesso");
        }else if(message.channel.type == "DM"){
            return
        }
        
    }
    
    comando.execute(message, args);
 
})




setInterval(function () {
    var canale = client.channels.cache.get("969232878057689118");
    canale.setName(`👾members: ${canale.guild.memberCount}`);
}, 1000 * 60 * 5)

setInterval(function () {
    var canale = client.channels.cache.get('964927790954725478');
   canale.bulkDelete(100, true) 
}, 1000 * 604800)







//-----asegna
//interaction.member.roles.add("965223293789548575")
//---only channennel
//client.on("messageCreate", message => {
//    if(message.channel.id != "IdChannel") return

//    if(message.content == "!test"){
//       message.channel.send("Ciao")
//    }
//}