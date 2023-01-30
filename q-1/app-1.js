let salaries = {
    "John": 200,
    "Pete": 400,
    "Mary": 400
   };

//    let [ fn , firstsal]= Object.entries(salaries)
//    let Arrsalary = Object.entries(salaries)
//    let maxsalary = 0;
//    let NameMaxSalary;
//    let test =[]
//    console.log(maxsalary);
 
//    function TopSalary(salaries){
//     for(let [Name,value] of Arrsalary){
//         if(value >= maxsalary){
//             maxsalary = value;
//             NameMaxSalary = Name;
//         }
       
//     }
//     return console.log(NameMaxSalary);



//    }
// TopSalary(salaries)





// *******************************************




   let testarr=[]
   function TopSalary(salaries){
    let Arrsalary = Object.entries(salaries)
    Arrsalary.sort((a , b) => b[1] - a[1])
    let [Name] = Arrsalary
 
    console.log(Arrsalary);
    
    for([esm , val] of Arrsalary){
        if( val == Name[1]){
            testarr.push(esm)
        }
    }
    console.log(testarr);
    
   }
   TopSalary(salaries)