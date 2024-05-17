// Ambil inputan dari HTMl
let inputName = document.getElementById("inputName")
let inputEmail = document.getElementById("inputEmail")
let inputGender = document.querySelectorAll(".inputGender")

// Ambil input untuk manipulate error message
let errorName = document.getElementById("errorName")
let errorEmail = document.getElementById("errorEmail")
let errorGender = document.getElementById("errorGender")

// Ambil submit button dari HTML
let submitBtn = document.getElementById("submitBtn")

// function untuk validate Name
function validateName(){
    if (inputName.value ==""){
        inputName.style.borderColor = "red"
        errorName.innerHTML = "Name cannot be empty"
        return false;
    } else {
        inputName.style.borderColor = "white"
        errorName.innerHTML = ""
        return true;
    }
}

// function untuk validate Email
function validateEmail(){
    if (inputEmail.value ==""){
        inputEmail.style.borderColor = "red"
        errorEmail.innerHTML = "Email cannot be empty"
        return false;
    } else if (!inputEmail.value.includes('@')){
        inputEmail.style.borderColor = "red"
        errorEmail.innerHTML = "Email must contain '@'"
        return false;
    } else {
        inputEmail.style.borderColor = "white"
        errorEmail.innerHTML = ""
        return true;
    }
}

// Bikin variable isChecked untuk validate true false gendernya
let isChecked = false

// Function untuk validate Gender
function validateGender(){
    inputGender.forEach(function(radioButton){
       if (radioButton.checked){
            isChecked = true
            return;
       } 
    });

    if (!isChecked){
        errorGender.innerHTML = "Please select one option"
        return false
    } else {
        return true
    }
}


submitBtn.addEventListener("click", function(e){    
    // biar ga lgsg submit and refresh pagenya
    validateName()
    validateEmail()
    validateGender()

    if (validateName() && validateEmail() && validateGender()){
    } else {
        e.preventDefault()
        // biar buttonnya ga submit kalau validationnya belum true semua
    }
})
