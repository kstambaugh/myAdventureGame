//The first function should allow for the players to choose a class (Fighter, Rogue, or Mage) and item
//The userClass and userItem choices will need to be returned so that the rest of the game knows which choices to give the players

// function gameSetup(){
//     let userClass = window.prompt("Hello and Welcome to the Adventurers Guild! Are you a Fighter, Rogue or Mage?")
//         if(userClass = "Fighter"){
//             let objectChoice = window.prompt("object1 or object2") //here we will give options for equipment
//             if(objectChoice = "object1")
//                 return(userClass,objectChoice)
//             else if(objectChoice = "object2")
//                 return(userClass,objectChoice)
//             else;



//         }
     
// }

function gameSetup2(){
    let userClass = undefined
    let userItem = undefined
    while(userClass = undefined){
        userClass = window.prompt("Choose Fighter, Rogue or Mage")
            if(userClass = "Fighter"){
                while(userItem = undefined)
                userItem = window.prompt("item1 or item2")
                    if(userItem = "item1" || "item2")
                        return userClass,userItem
                    else;
                    userItem = undefined                
            }else if(userClass = "Rogue"){
                while(userItem = undefined)
                userItem = window.prompt("item3 or item4")
                    if(userItem = "item3" || "item4")
                        return userClass,userItem
                    else;
                    userItem = undefined

            }else if( userClass = "Mage"){
                while(userItem = undefined)
                userItem = window.prompt("item5 or item6")
                    if(userItem = "item5" || "item6")
                        return userClass,userItem
                    else;
                    userItem = undefined
            }else;
                userClass = undefined
}
}
gameSetup2()