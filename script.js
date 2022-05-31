
const pwd1Button = document.getElementById("pwd1");
const pwd2Button = document.getElementById("pwd2");

pwd1Button.addEventListener('input', function (event) {
    console.log("INPUT CHANGED")
    if(pwd1Button.validity.tooShort){
        pwd1Button.className = "error";
    } else if (pwd1Button.value !== ""){
        pwd1Button.className = "";
    }
})

pwd2Button.addEventListener('input', function (event) {
    console.log("INPUT CHANGED")
    if(pwd1Button.value === pwd2Button.value){
        console.log("CHECK")
        pwd2Button.setCustomValidity("");
        pwd2Button.className = "";
    } else {
        pwd2Button.setCustomValidity("The passwords must match!");
        pwd2Button.className = "error";
    }
})