const prompt=require('prompt-sync')();

// 3. Display ones, tens, hundreds,... digits in a number

let num=Number(prompt('Enter the number: '));
let arr =[];
i=0;
while(num!=0)
{
    remainder=Math.floor(num%10);
    arr[i]=remainder;
    i++;
    num=num/10;
}
for(i=0;i<arr.length;i++)
{
    switch(i)
    {
        case 0:
            console.log("Value at ones place: "+arr[i]);
            break;
        case 1:
            console.log("Value at tens place: "+arr[i]);
            break;
        case 2:
            console.log("Value at hundreds place: "+arr[i]);
            break;
        case 3:
            console.log("Value at thousands place: "+arr[i]);
            break;
    }
}

