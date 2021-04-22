const prompt = require('prompt-sync')();
// 3. Flip coin till either heads or tails win 11 times

let countHeads=0;
let countTails=0;
while(countHeads<11 && countTails<11)
{
    var tossResult = Math.floor(Math.random()*10)%2;
    if (tossResult == 0)
        countHeads++;
    else
        countTails++;
}
if(countTails==11)
console.log("Tails won");
if(countHeads==11)
console.log("Heads won");
