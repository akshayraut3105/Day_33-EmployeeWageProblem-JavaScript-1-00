const prompt = require('prompt-sync')();
// 1. Print powers of a 2 until a given index

let index = Number(prompt('Enter the number: '));
for(i=1;i<=index;i++)
{
    console.log(Math.pow(2,i));
}
