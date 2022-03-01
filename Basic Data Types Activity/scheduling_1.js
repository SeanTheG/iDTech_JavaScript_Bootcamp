console.log("The enemy has attacked!  Player has 10 seconds to defeat the enemy!");

function victory() {
    console.log("Play has defeated the enemy");
}

setTimeout(victory, 10000);

/*
setTimeout(function victory() {
    console.log("You are the Champion!");
}, 5000;
*/

