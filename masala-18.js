function longestPrefix(strs){
    let prefix = undefined;
    for (let j=1; j<strs.length; j++){
        prefix = "";
        let low = Math.min(strs[0].length, strs[j].length);
        for (let k=0; k<low; k++){
            if (strs[0][k]==strs[j][k]){
                prefix+=strs[0][k];
            }
        }
        strs[0]=prefix;
    }

    return prefix;
}

let strs = ["flower","flow","flight"];

console.log(longestPrefix(strs));