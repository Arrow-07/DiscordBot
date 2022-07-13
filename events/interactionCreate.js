module.exports = {
    name: "interactionCreate",
    execute(interaction) {

        if(interaction.customId.startsWith('b1')){
            interaction.member.roles.add("959153371904884817")
            interaction.reply({content: 'EVVIVA! HAI ACCETATO LE REGOLE E ORA FAI PARTE DEL SERVER, DIVERTITI', ephemeral: true})
        }
    
        if(interaction.customId.startsWith('b2')){
            interaction.member.roles.remove("959153371904884817")
            interaction.reply({content: 'CHE PECCATO, HAI RIFIUTATO LE REGOLE DEL SERVER, SPERIAMO DI RINCONTRARCI PRESTO', ephemeral: true})
        }
      
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

        if(interaction.customId == 'menu'){
          var PRI = "959153907706265652"
          var SEC = "959154074920562778"
          var TER = "959154244651466763"
          var QUA = "959154295339630622"
          var QUI = "959154342097715241"
          switch(interaction.values[0]){
                case "1": {
                  if(interaction.member.roles.has(SEC)){
                    interaction.member.roles.remove(SEC)
                   }
                   if(interaction.member.roles.has(TER)){
                    interaction.member.roles.remove(TER)
                   }
                   if(interaction.member.roles.has(QUA)){
                    interaction.member.roles.remove(QUA)
                   }
                   if(interaction.member.roles.has(QUI)){
                    interaction.member.roles.remove(QUI)
                   }
                  
                  interaction.reply({content: 'il ruolo \"1°\" è stato assegnato', ephemeral: true})
                  interaction.member.roles.add(PRI)
                }break
              
               case "2": {
                if(interaction.member.roles.has(PRI)){
                  interaction.member.roles.remove(PRI)
                 }
                 if(interaction.member.roles.has(TER)){
                  interaction.member.roles.remove(TER)
                 }
                 if(interaction.member.roles.has(QUA)){
                  interaction.member.roles.remove(QUA)
                 }
                 if(interaction.member.roles.has(QUI)){
                  interaction.member.roles.remove(QUI)
                 }

                  interaction.reply({content: 'il ruolo \"2°\" è stato assegnato', ephemeral: true})
                  interaction.member.roles.add(SEC)
                }break
             
               case "3": {
                if(interaction.member.roles.has(SEC)){
                  interaction.member.roles.remove(SEC)
                 }
                 if(interaction.member.roles.has(PRI)){
                  interaction.member.roles.remove(PRI)
                 }
                 if(interaction.member.roles.has(QUA)){
                  interaction.member.roles.remove(QUA)
                 }
                 if(interaction.member.roles.has(QUI)){
                  interaction.member.roles.remove(QUI)
                 }
                
                  interaction.reply({content: 'il ruolo \"3°\" è stato assegnato', ephemeral: true})
                  interaction.member.roles.add(TER)
                }break
             
               case "4": {
                if(interaction.member.roles.has(SEC)){
                  interaction.member.roles.remove(SEC)
                 }
                 if(interaction.member.roles.has(TER)){
                  interaction.member.roles.remove(TER)
                 }
                 if(interaction.member.roles.has(PRI)){
                  interaction.member.roles.remove(PRI)
                 }
                 if(interaction.member.roles.has(QUI)){
                  interaction.member.roles.remove(QUI)
                 }
                
                  interaction.reply({content: 'il ruolo \"4°\" è stato assegnato', ephemeral: true})
                  interaction.member.roles.add(QUA)
                }break
      
               case "5": {
                if(interaction.member.roles.has(SEC)){
                  interaction.member.roles.remove(SEC)
                 }
                 if(interaction.member.roles.has(TER)){
                  interaction.member.roles.remove(TER)
                 }
                 if(interaction.member.roles.has(QUA)){
                  interaction.member.roles.remove(QUA)
                 }
                 if(interaction.member.roles.has(PRI)){
                  interaction.member.roles.remove(PRI)
                 }

                  interaction.reply({content: 'il ruolo \"5°\" è stato assegnato', ephemeral: true})
                  interaction.member.roles.add(QUI)
                }break
            }
          }
          
//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_

          if(interaction.customId == 'menu1'){
              var A = "959155155738181682"
              var B = "959155258548953108"
              var C = "959155212533239849"
              var D = "959155320628863087"
              var E = "959155405014057100"
            switch(interaction.values[0]){
                  case "1": {
                    if(interaction.member.roles.has(B)){
                      interaction.member.roles.remove(B)
                     }
                     if(interaction.member.roles.has(C)){
                      interaction.member.roles.remove(C)
                     }
                     if(interaction.member.roles.has(D)){
                      interaction.member.roles.remove(D)
                     }
                     if(interaction.member.roles.has(E)){
                      interaction.member.roles.remove(E)
                     }
                    
                    interaction.reply({content: 'il ruolo \"A\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(A)
                  }break
                
                 case "2": {
                  if(interaction.member.roles.has(A)){
                    interaction.member.roles.remove(A)
                   }
                   if(interaction.member.roles.has(C)){
                    interaction.member.roles.remove(C)
                   }
                   if(interaction.member.roles.has(D)){
                    interaction.member.roles.remove(D)
                   }
                   if(interaction.member.roles.has(E)){
                    interaction.member.roles.remove(E)
                   }

                    interaction.reply({content: 'il ruolo \"B\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(B)
                  }break
               
                 case "3": {
                  if(interaction.member.roles.has(B)){
                    interaction.member.roles.remove(B)
                   }
                   if(interaction.member.roles.has(A)){
                    interaction.member.roles.remove(A)
                   }
                   if(interaction.member.roles.has(D)){
                    interaction.member.roles.remove(D)
                   }
                   if(interaction.member.roles.has(E)){
                    interaction.member.roles.remove(E)
                   }

                    interaction.reply({content: 'il ruolo \"C\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(C)
                  }break
               
                 case "4": {
                  if(interaction.member.roles.has(B)){
                    interaction.member.roles.remove(B)
                   }
                   if(interaction.member.roles.has(C)){
                    interaction.member.roles.remove(C)
                   }
                   if(interaction.member.roles.has(A)){
                    interaction.member.roles.remove(A)
                   }
                   if(interaction.member.roles.has(E)){
                    interaction.member.roles.remove(E)
                   }

                    interaction.reply({content: 'il ruolo \"D\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add(D)
                  }break
        
                 case "5": {
                  if(interaction.member.roles.has(B)){
                    interaction.member.roles.remove(B)
                   }
                   if(interaction.member.roles.has(C)){
                    interaction.member.roles.remove(C)
                   }
                   if(interaction.member.roles.has(D)){
                    interaction.member.roles.remove(D)
                   }
                   if(interaction.member.roles.has(A)){
                    interaction.member.roles.remove(A)
                   }

                    interaction.reply({content: 'il ruolo \"E\" e stato assegnato', ephemeral: true})
                    interaction.member.roles.add(E)
                  }break
              }
            }
                       
    //-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_        
            
            if(interaction.customId == 'menu2'){
                    var ele = "959154791441891328" //eletronica a
                    var inf = "959154658218217582"//informatica b
                    var lic = "959154405603672065"//liceo c
              switch(interaction.values[0]){
                  case "1": {
                    
                    if(interaction.member.roles.cache.has(ele)) {
                      interaction.member.roles.remove(ele)
                    }
                    if(interaction.member.roles.cache.has(inf)) {
                      interaction.member.roles.remove(inf)
                    }
                    interaction.reply({content: 'il ruolo \"LICEO S.A\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(lic)
                  }break
                
                 case "2": {
                 
                  if(interaction.member.roles.cache.has(ele)) {
                      interaction.member.roles.remove(ele)
                    }
                    if(interaction.member.roles.cache.has(lic)) {
                      interaction.member.roles.remove(lic)
                    }
                    interaction.reply({content: 'il ruolo \"ITIS INFORMATICA\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(inf)
                    
                  }break
               
                 case "3": {
                    
                  if(interaction.member.roles.cache.has(inf)) {
                    interaction.member.roles.remove(inf)
                    }
                    if(interaction.member.roles.cache.has(lic)) {
                    interaction.member.roles.remove(lic)
                    }
                    interaction.reply({content: 'il ruolo \"ITIS ELETRONICA\" è stato assegnato', ephemeral: true})
                    interaction.member.roles.add(ele)
                  }break
                }
              }


    }
}
//if(interaction.member.roles.has("959154791441891328"))(
//                    interaction.member.roles.remove("959154791441891328")
               
 