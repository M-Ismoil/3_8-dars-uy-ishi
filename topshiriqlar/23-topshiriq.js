let obj = {
    name: "A",
    age: 20
}

function getData(){
    return `Name: ${this.name}\nAge ${this.age}`;
}

let getData1 = ()=>{
    return `Name: ${this.name}\nAge ${this.age}`;
}

console.log("Declaration Function:\n"+getData.apply(obj));
console.log("\nArrow function:\n"+getData1.apply(obj));