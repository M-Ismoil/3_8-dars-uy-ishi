function getRandomNumber(){
    return Math.floor(Math.random()*10);
}

function multpleRandomTo10(func){
    let random = func();

    return random*10;
}

console.log(multpleRandomTo10(getRandomNumber));