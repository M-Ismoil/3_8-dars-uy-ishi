function getFactorial(num){
    let sum = 1;

    for (let i=1; i<=num; i++){
        sum*=i;
    }

    console.log(sum);
}

let num = 5;

getFactorial(num);