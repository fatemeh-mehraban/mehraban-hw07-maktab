const inputs = document.querySelectorAll("input")
let gender = document.getElementsByName('gender');
const textinput= document.querySelectorAll('input[type="text"]')

// console.log(textinput);
// console.log(gender);

function myFunction(event) {
event.preventDefault();

    deletgenderandlog()
    displayRadioValue()
    patternText()
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
        
        for(item of textinput){
            if(item.value.length < 3){
            place = item.parentNode
            let span= document.createElement("span")
            span.innerHTML = ` ${item.id} entered is incorrect!`
            span.style.fontSize = "17px"
            span.style.padding = "5px"
            span.style.color = "red"
            place.appendChild(span)
            item.style.border = "2px solid red"
           
        }
       
    }
    }
   