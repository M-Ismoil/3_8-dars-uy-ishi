console.log(1);

await Promise.resolve(2).then(response=>console.log(response));

setTimeout(()=>console.log(3),0);

console.log(4);