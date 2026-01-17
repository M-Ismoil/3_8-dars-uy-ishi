function getSum(obj){
    let sum = 0;

    for (let i in obj){
        sum+=obj[i];
    }

    return sum;
}

let obj = {
    "A": 1,
    "B": 4,
    "D": 2
}

console.log(getSum(obj));