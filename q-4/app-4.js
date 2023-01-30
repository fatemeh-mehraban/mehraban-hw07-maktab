let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr){
    let test = new Map();
    for(item of arr){
        let x = item.toLowerCase().split("").sort().join("")
        test.set(x , item)
        
        
    }
    return console.log(Array.from(test.values()));

}
aclean(arr)