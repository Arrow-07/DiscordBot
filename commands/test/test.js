const Discord = require('discord.js');


module.exports = {
    name: "test",
    description: "comando di test",
    aliases: ["prova", "ping"],
    onlyStaff: false,
    async execute(message, args, member){     
        //canvas
            const {createCanvas, loadImage} = require("canvas")
            let canvas = await createCanvas(1700, 600)
            let ctx = await canvas.getContext("2d")
        //immagine
            let img = await loadImage("./img/background.jpg")
            ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2)
        //riempire di un colore
            ctx.fillStyle = "rgba(0,0,0,0.30)"
            ctx.fillRect(70, 70, canvas.width - 70 - 70, canvas.height - 70 - 70)
        //immagine tonda
            ctx.save()
            ctx.beginPath()
            ctx.arc(300, canvas.height / 2, 150, 0, 2 * Math.PI, false)
            ctx.clip()
            img = await loadImage(member.displayAvatarURL({ format: "png" }))
            ctx.drawImage(img, 150, canvas.height / 2 - 300 / 2, 300, 300)
            ctx.restore()
        //mandare un canvas    
            let channel = client.channels.cache.get("996715018957627444");
       
            let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")
            
            channel.send({files: [attachment]})
           
    
    }
}
