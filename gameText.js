
function pickYourClass() {

let userClass = window.prompt('Welcome to the Adventurers Guild.  Please, choose a class. fighter, rogue or mage');
    if (userClass === 'fighter') {
        let weaponChoice = window.prompt("Ahh yes, a strong and able fighter!  Surely you can take down the strongest of foes! Will you be needing a sword or an axe?");
        
        if (weaponChoice === 'sword') {
            window.alert('The quick and deadly blade looks natural in your apt hands! Great choice!');
            return userClass, weaponChoice;
            


        }if (weaponChoice === 'axe') {
            window.alert('You look quite menacing wielding that might axe! May your foes tremble before you!');
            return userClass, weaponChoice;
        }
        
    } if (userClass === 'rogue') {
        let weaponChoice = window.prompt("Ahh the shadow in the night! Your enemies will never know what hit them! Do you prefer a bow or a dagger?");

        if (weaponChoice === "bow") {
            window.alert("A silent hawk stalking his prey from afar.  Your enemies will never know what hit em!");
            return userClass, weaponChoice;

        } if (weaponChoice === "dagger") {
            window.alert("Steel as sharp as your mind and as cold as your heart! Your enemies will fear the shadows!");
            return userClass, weaponChoice;
        }
        
    } if (userClass === 'mage') {
        let weaponChoice = window.prompt("Oh I can feel the power of the elements emmitating from you! Which do you wield? Fire or ice?");

        if (weaponChoice === "fire") {
            window.alert("The wrath of 1000 suns burns at your fingertips!  Your enemies will be turned to ash!");
            return userClass, weaponChoice;


        } if (weaponChoice === "ice") {
            window.alert("Your very presence will freeze your foes with fear! They will shatter before you!");
            return userClass, weaponChoice;

        }
        
        
    }else;
        window.alert("I'm sorry, I didn't quite catch that?");
        
    
    

 
}


function startGame() {

    let questChoice = window.prompt("I have two adventures for someone with your skills.  One is deep within the forest while the other is the mountain.  Which would you like?")
    if (questChoice === 'forest') {
        var forkInPath = window.prompt("You find yourself on the edge of a forest with a dense treeline.  Before you a path dissappears beyond trees and into the darkness.  A few steps onward and you come to a fork in the path. \
                        Do you turn left or right?")
        if (forkInPath === "left") {
            if (weaponChoice === "sword") {
                fighterChoice1 = window.prompt("You find yourself facing down a large and monsterous beast with claws as long as daggers and fangs to match.  It stares you down \
                                ready to devour you.  The creature lunges at you!  Sword in hand, you can either dodge the attack and sweep its legs, or you can meet the beast and attack its chest.  Which do you do, 'dodge' or 'attack'?")
                if (fighterChoice1 === 'dodge') {
                    fighterChoice1A = window.prompt("You duck under the creatures attack, sweep its leg and use its momentum to cause it to topple heavily to the ground.  Its back is now open to a clear attack \
                                    and you could very easily land a killing blow!  You could also just as easily knock the creature unconcious and spare its life.  Do you 'kill it' or 'spare it'?")
                    if (fighterChoice1A === 'kill it') {
                        fighterChoice1B = window.prompt("You drive your blade through the creatures exposed back and end its life. As you look down at your kill, you hear the whimpering as the creatures young offspring crawls from its nest, nudging \
                                        nudging its mother, attempting to wake her up. You could take the youngling with you and 'raise it' as a pet or you could 'leave it' to fend for itselft")
                        if (fighterChoice1B = 'raise it') {
                            window.alert("Remorse fills your heart as you reach down and pick up the small creature. You would raise this creature as your pet and go on many wonderful adventures together!")
                        }
                        else if (fighterChoice1B = 'leave it') {
                            window.alert("You ignore the young creature and remove your prize from the slain creatures hide.  It will make an excellent trophy!")
                        }
                    }
                    else if (fighterChoice1A === 'spare it') {
                        fighterChoice2a = window.prompt("You flip your sword around and bash the back of the creatures head, rendering it unconcious.  The creatures body falls limp and you are able to investigate the area further.  You find the sleeping young \
                                        of the creature and a small lockbox.  Do you take the 'cub' or the 'box'?")
                        if (fighterChoice2a === 'cub') {
                            window.alert("You see more value in training a potental adventuring mate than you do any old lockbox in the middle of the forest.  You go on to form a life long bond with this creature")
                        }
                        else if (fighterChoice2a === "box") {
                            window.alert("You grab the lockbox and quickly make for safety.  Once back at base you are able to get the lock open and inside the box you find several valuable gold coins!")
                        }
                    }
                }
                else if (fighterChoice1A == "attack") {
                    window.alert("You go to drive your sword into the creatures chest, only to find it deflected by the creatures powerful claw.  The last thing you see before you perish is the gapping maw of a very hungry creature!")
                }
            }
            else if (weaponChoice === "axe") {

            }
        }
    }
}


pickYourClass();

chosenWeapon = pickYourClass.weaponChoice
chosenClass = pickYourClass.userClass

console.log(chosenClass,chosenWeapon)


