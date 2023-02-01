const inputs = document.querySelectorAll("input")
let gender = document.getElementsByName('gender');
const textinput= document.querySelectorAll('input[type="text"]')



let Name = document.getElementById("firstname")
let lastname = document.getElementById("lastname")
let email = document.getElementById("email")
let form = document.querySelector("form")
let flag = true

function myFunction(event) {
event.preventDefault();
    // if(patternText){
    //     console.log(Name.value);
    // }
    if(flag){

        deletgenderandlog()
        displayRadioValue()
        
    }



  }


    function displayRadioValue() {
    var ele = document.getElementsByName('gender');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        console.log("Gender: " + ele[i].id);
    }
}
    function deletgenderandlog(){
    for(item of inputs){

        if(item.name !== "gender" ){
        console.log(`${item.id} : ${item.value}`);
    }
}
}
    function patternText(x){
        if( x.value.length <3){
             return false
        }else{
            return true

        }
    }



    function patternEmail(x){
       const emailpattern =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if( emailpattern.test(x.value)){
             return true
        }else{
            return false

        }
    }


        // if( lastname.value.length <3){
        //     place = lastname.parentNode
        //      let span= document.createElement("span")
        //      span.className = "eror"
        //      span.innerHTML = ` ${lastname.id} entered is incorrect!`
        //      span.style.fontSize = "17px"
        //      span.style.padding = "5px"
        //      span.style.color = "red"
        //      place.appendChild(span)
        //      lastname.style.border = "2px solid red"
        //      form.dataset.invalid == 1
        // }
        // lastname.addEventListener("change", ()=>{
        //     lastname.parentElement.lastChild.remove();
        //     lastname.style.border = "none"
        // })

        // email.addEventListener("change", ()=>{
        //     email.parentElement.lastChild.remove();
        //     email.style.border = "none"
        // })



        // *************error name****************
        Name.addEventListener("keyup", ()=>{
            if(patternText(Name)){
                if(Name.parentElement.querySelector(".error")){
                Name.parentElement.querySelector(".error").remove();
                Name.style.border = "none"
                flag = true
            }
            }else{
                place = Name.parentNode
                let span= document.createElement("span")
                span.className = "error"
                span.innerHTML = ` ${Name.id} entered is incorrect!`
                span.style.fontSize = "17px"
                span.style.padding = "5px"
                span.style.color = "red"
                place.appendChild(span)
                Name.style.border = "2px solid red"
                flag = false
            }
     
            
        })  

// *************error lastname****************
        
        lastname.addEventListener("keyup", ()=>{
            if(patternText(lastname)){
                if(lastname.parentElement.querySelector(".error")){
                    lastname.parentElement.querySelector(".error").remove();
                    lastname.style.border = "none"

                flag = true
            }
            }
            else{
                place = lastname.parentNode
                
                let span= document.createElement("span")
                span.className = "error"
                span.innerHTML = ` ${lastname.id} entered is incorrect!`
                span.style.fontSize = "17px"
                span.style.padding = "5px"
                span.style.color = "red"
                place.appendChild(span)
                lastname.style.border = "2px solid red"
                flag = false
            }
     
            
        })  

    // ********************************
 
      
    email.addEventListener("keyup", ()=>{
        if(patternEmail(email)){
            if(email.parentElement.querySelector(".error")){
                email.parentElement.querySelector(".error").remove();
                email.style.border = "none"

            flag = true
        }
        }
        else{
            place = email.parentNode
            
            let span= document.createElement("span")
            span.className = "error"
            span.innerHTML = ` ${email.id} entered is incorrect!`
            span.style.fontSize = "17px"
            span.style.padding = "5px"
            span.style.color = "red"
            place.appendChild(span)
            email.style.border = "2px solid red"
            flag = false
        }
 
        
    })  


       
    














    //     for(item of textinput){
    //         if(item.value.length < 3 ){
    
    //                     place = item.parentNode
    //                     let span= document.createElement("span")
    //                     span.className = "eror"
    //                     span.innerHTML = ` ${item.id} entered is incorrect!`
    //                     span.style.fontSize = "17px"
    //                     span.style.padding = "5px"
    //                     span.style.color = "red"
    //                     place.appendChild(span)
    //                     item.style.border = "2px solid red"
    //         }
    //         item.addEventListener("keyup", ()=>{
    //             place = item.nextElementSibling
    //             place.child
    //             }
    // }

// function formvalid() {
//     if(form.dataset.invalid == 1){
//         return null
//     }
// }




        // if( !email.value.contains("@")){
        //     place = email.parentNode
        //      let span= document.createElement("span")
        //      span.className = "eror"
        //      span.innerHTML = ` ${email.id} entered is incorrect!`
        //      span.style.fontSize = "17px"
        //      span.style.padding = "5px"
        //      span.style.color = "red"
        //      place.appendChild(span)
        //      email.style.border = "2px solid red"
        //      form.dataset.invalid == 1
        // }