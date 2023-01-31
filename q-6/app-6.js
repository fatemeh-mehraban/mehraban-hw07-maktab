const inputs = document.querySelectorAll("input")
let gender = document.getElementsByName('gender');
const textinput= document.querySelectorAll('input[type="text"]')
let Name = document.getElementById("firstname")
let lastname=document.getElementById("lastname")
let email = document.getElementById("email")
let form = document.querySelector("form")

function myFunction(event) {
event.preventDefault();
    patternText()
    deletgenderandlog()
    displayRadioValue()

    
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
    function patternText(){
        if( Name.value.length <3){
            place = Name.parentNode
             let span= document.createElement("span")
             span.className = "eror"
             span.innerHTML = ` ${Name.id} entered is incorrect!`
             span.style.fontSize = "17px"
             span.style.padding = "5px"
             span.style.color = "red"
             place.appendChild(span)
             Name.style.border = "2px solid red"
             form.dataset.invalid == 1
        }
        Name.addEventListener("change", ()=>{
            Name.parentElement.lastChild.remove();
            Name.style.border = "none"
        })

        if( lastname.value.length <3){
            place = lastname.parentNode
             let span= document.createElement("span")
             span.className = "eror"
             span.innerHTML = ` ${lastname.id} entered is incorrect!`
             span.style.fontSize = "17px"
             span.style.padding = "5px"
             span.style.color = "red"
             place.appendChild(span)
             lastname.style.border = "2px solid red"
             form.dataset.invalid == 1
        }
        lastname.addEventListener("change", ()=>{
            lastname.parentElement.lastChild.remove();
            lastname.style.border = "none"
        })


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
        email.addEventListener("change", ()=>{
            email.parentElement.lastChild.remove();
            email.style.border = "none"
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
    // }
}
// function formvalid() {
//     if(form.dataset.invalid == 1){
//         return null
//     }
// }

