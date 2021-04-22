const prompt = require('prompt-sync')();
// 6. Print prime factors of a number n

let n = Number(prompt('Enter the number: '));
// Print the number of 2s that divide n
while (n % 2 == 0) 
{
    console.log("2");
    n = n / 2;
}  
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= n; i = i + 2) 
{
    // While i divides n, print i and divide n  
    while (n % i == 0) 
    {
        console.log(i);
        n = n / i;
    }
}
// This condition is to handle the case when after division by 2 n  
// is a prime number greater than 2  
if (n > 2)
    console.log(n);  
