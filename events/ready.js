module.exports = {
    name: "ready",
    execute() { 
        //Stato classico (Sta guardando..., Sta giocando a...)LISTENING, PLAYING
        client.user.setActivity('!help', { type: 'WATCHING' })
        //Stato online/offine/non disturbare... (Potrebbe volerci qualche tempo per doversi settare)
        client.user.setStatus('online') //Oppure idle, dnd, invisible
        console.log(`BOT ONLINE E AVVIATO CON SUCCESSO, ping: ${client.ws.ping}ms`)
    }
}
