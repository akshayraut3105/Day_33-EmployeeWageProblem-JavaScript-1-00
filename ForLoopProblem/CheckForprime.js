const prompt = require('prompt-sync')();
// 3. Find if number is prime or not

let n = Number(prompt('Enter the number: '));
let flag=true;
if (n <= 1)
flag=false;
else 
{
    for (let i = 2; i < n; i++) 
    {
        if (n % i == 0)
            flag = false;        
    }
}
if(flag==false)
console.log("It is not a prime number");
if(flag==true)
console.log("It is a prime number");
