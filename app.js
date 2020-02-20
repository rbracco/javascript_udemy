alert('Hello from JS!');
let highScore = 1430;
let userScore = 1220;
if (userScore > highScore) {
    console.log("NEW HIGH SCORE!");
}
else {
    console.log("YOU ARE LOSER")
}

function isValidPassword(password, username){
    const tooShort = password.length < 8;
    const hasSpace = password.indexOf(' ') !== -1;
    const hasUname = password.indexOf(username) !== -1
    return !tooShort && !hasSpace && !hasUname;
}

function avg(nums){
    let sum = 0;
    for (let num of nums){
        sum += num;
    }
    return sum/nums.length;
}

function isPangram(sentence){
    alpha = 'abcdefghijklmnopqrstuvwxyz'
    lower = sentence.toLowerCase();
    for (let char of alpha){
        if (!lower.includes(char)
        ){
            return false;
        }
    }
    return true;
}

//helper function for get card
function pick(arr){
    index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getCard(){
    let suits = ['clubs', 'diamonds', 'hearts', 'spades']
    let ranks = 'A23456789TJQK'
    return {
        value: pick(ranks),
        suit: pick(suits),
    }
}
