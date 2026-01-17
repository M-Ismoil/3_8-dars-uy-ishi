async function getData(){
    try{
        let data = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!data.ok){
            throw new Error("Error")
        }
        let data1 = await data.json();

        console.log(data1);
    }catch (error){
        console.log(error.message);
        console.log(undefined);
    }
}

getData();