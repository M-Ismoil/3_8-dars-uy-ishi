function isPrime(num){
    if (num<=0){
        return `Tub son emas!`;
    }

    for (let i=2; i<=Math.sqrt(num); i++){
        if (num%i===0){
            return `Tub son emas!`;
        }
    }

    return 'Tub son!';
}

let num = 3;
let num1 = 4;

console.log(isPrime(num));
console.log(isPrime(num1));