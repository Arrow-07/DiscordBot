module.exports = {
    name: "interactionCreate",
    execute(interaction) {

        if(interaction.customId.startsWith('b1')){
            interaction.member.roles.add("959153371904884817")
            interaction.reply({content: 'il ruolo è stato assegnato', ephemeral: true})
        }
    
        if(interaction.customId.startsWith('b2')){
            interaction.member.roles.remove("959153371904884817")
            interaction.reply({content: 'il ruolo è stato eliminato', ephemeral: true})
        }
      
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

        if(interaction.customId == 'menu'){
            switch(interaction.values[0]){
                case "1": {
                  interaction.reply({content: 'il ruolo \"1°\" e stato assegnato', ephemeral: true})
                  interaction.member.roles.add("959153907706265652")
                }break
              
               case "2": {
                  interaction.reply({content: 'il ruolo \"2°\" e stato assegnato', ephemeral: true})
                  interaction.member.roles.add("959154074920562778")
                }break
             
               case "3": {
                  interaction.reply({content: 'il ruolo \"3°\" e stato assegnato', ephemeral: true})
                  interaction.member.roles.add("959154244651466763")
                }break
             
               case "4": {
                  interaction.reply({content: 'il ruolo \"4°\" e stato assegnato', ephemeral: true})
                  interaction.member.roles.add("959154295339630622")
                }break
      
               case "5": {
                  interaction.reply({content: 'il ruolo \"5°\" e stato assegnato', ephemeral: true})
                  interaction.member.roles.add("959154342097715241")
                }break
            }
          }
          
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

          if(interaction.customId == 'menu1'){
              switch(interaction.values[0]){
                  case "1": {
                    interaction.reply({content: 'il ruolo \"A\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add("959155155738181682")
                  }break
                
                 case "2": {
                    interaction.reply({content: 'il ruolo \"B\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add("959155258548953108")
                  }break
               
                 case "3": {
                    interaction.reply({content: 'il ruolo \"C\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add("959155212533239849")
                  }break
               
                 case "4": {
                    interaction.reply({content: 'il ruolo \"D\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add("959155320628863087")
                  }break
        
                 case "5": {
                    interaction.reply({content: 'il ruolo \"E\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add("959155405014057100")
                  }break
              }
            }
                       
    //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_        
            
            if(interaction.customId == 'menu2'){
                    var A = "959154791441891328"
                    var B = "959154658218217582"
                    var C = "959154405603672065"
              switch(interaction.values[0]){
                  case "1": {
                    
                    if(interaction.member.roles.cache.has(B)) {
                      interaction.member.roles.remove(B)
                    }
                    if(interaction.member.roles.cache.has(A)) {
                      interaction.member.roles.remove(A)
                    }
                    interaction.reply({content: 'il ruolo \"LICEO S.A\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add(C)
                  }break
                
                 case "2": {
                 
                  if(interaction.member.roles.cache.has(C)) {
                      interaction.member.roles.remove(C)
                    }
                    if(interaction.member.roles.cache.has(A)) {
                      interaction.member.roles.remove(A)
                    }
                    interaction.reply({content: 'il ruolo \"ITIS INFORMATICA\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add(B)
                    
                  }break
               
                 case "3": {
                    
                  if(interaction.member.roles.cache.has(C)) {
                    interaction.member.roles.remove(C)
                    }
                    if(interaction.member.roles.cache.has(B)) {
                    interaction.member.roles.remove(B)
                    }
                    interaction.reply({content: 'il ruolo \"ITIS ELETRONICA\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add(A)
                  }break
                }
              }


    }
}
//if(interaction.member.roles.has("959154791441891328"))(
  //                    interaction.member.roles.remove("959154791441891328")
    //                
    
    