module.exports = {
    name: "guildMemberAdd",
   async execute(member) {
        const {createCanvas, loadImage} = require("canvas")
        let canvas = await createCanvas(1700, 600)
        let ctx = await canvas.getContext("2d")

        let img = await loadImage("./img/background.png")
        ctx.drawImage(img, canvas.width / 2 - img.width / 2, canvas.height / 2 - img.height / 2)

        let channel = client.channels.cache.get("996715018957627444");
   
        let attachment = new Discord.MessageAttachment(canvas.toBuffer(), "canvas.png")
        
        channel.send({files: [attachment]})
    }
}