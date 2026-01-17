function changeOrder(s){
    let lst1 = s.split(" ");
    let lst = [];
    for (let i=lst1.length-1; i>=0; i--){
        lst.push(lst1[i]);
    }
    
    return lst.join(" ");
}

let s = "the sky is blue";
console.log(changeOrder(s));