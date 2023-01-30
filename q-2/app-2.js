// let arr=[1,70,2,[20,4]]
function sortarr(...para){
 let test = para.flat(Infinity).sort((a,b) => a - b)
 console.log(test);
}
sortarr([1,8,2,0,400,4,[80,3,[0,6]]],[1,0,99])