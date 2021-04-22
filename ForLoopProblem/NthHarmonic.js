const prompt = require('prompt-sync')();
// 2. Print the nth harmonic number

let n = Number(prompt('Enter the number: '));
harmonicNo=0;
for(i=1;i<=n;i++)
{
    harmonicNo+=1/i;
}
console.log(n+"th Harmonic number= "+harmonicNo);
