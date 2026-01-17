setTimeout(()=>console.log(`setTimeOut 1 marta ishlaydi!`),1000);

const interval = setInterval(()=>console.log(`setInterval har ma'lum sekundda ishlaydi!`),1000);

setTimeout(()=>{
    clearInterval(interval);
    console.log(`Interval to'xtatildi!`);
}, 5000)