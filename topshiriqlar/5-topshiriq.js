function getSum(num){
    let sum = 0;
    while(num){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    console.log(sum);
}

let num = 123;

getSum(num);