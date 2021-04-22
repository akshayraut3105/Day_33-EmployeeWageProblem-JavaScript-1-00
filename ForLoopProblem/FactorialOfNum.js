const prompt = require('prompt-sync')();
// 5.Factorial of a number n

let n = Number(prompt('Enter the number n: '));
let fact = 1;
if (n < 0)
    console.log("Enter a positive number");
else 
{
    if (n == 0)
        fact = 1;
    for (let i = 2; i <= n; i++) 
    {
        fact *= i;
    }
    console.log(n + "!=" + fact);
}
