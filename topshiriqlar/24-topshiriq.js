let obj = {
    name: "A",
    age: 20
}

obj.lastName = "B";

obj = Object.fromEntries(Object.entries(obj).filter((item)=>item[0]!=="age"));
console.log(obj);