let promise = new Promise((resolve, reject)=>{
    resolve("Success");
    reject("Error");
})

promise
    .then(response=>console.log(response))
    .catch(error=>console.log(error));