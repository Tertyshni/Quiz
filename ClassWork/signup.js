'use strict'

document.addEventListener('DOMContentLoaded',()=>{
    const SignupForm = document.forms['signup-form']
    if(SignupForm) SignupForm.addEventListener('submit',validateForm)
    
})


const validateForm =(e= new SubmitEvent)=>{
    e.preventDefault()
    const form = e.target;

    const validationErrors ={}

    const formData = Object.fromEntries(new FormData(e.target))
    
    if (!formData.nameInput || formData.nameInput.length === 0) {
        validationErrors.nameInput = "Name is required";
    }
    
    if(!formData.nameInput || formData.surnameInput.length === 0){
        validationErrors.surnameInput ='Surname is required'
    }

    const nameRegExp=/^[A-Za-z]{1,60}$/
    if(!nameRegExp.test(formData.nameInput)){
        console.log("Error name");
        validationErrors.nameInput="Name doesn't fit the template";
    }
    
    if(!nameRegExp.test(formData.surnameInput)){
        console.log("Error Surname");
        validationErrors.surnameInput="Surname doesn't fit the template";
    }

    const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!emailRegExp.test(formData.emailInput)) {
        validationErrors.emailInput = "Invalid email";
    }

    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegExp.test(formData.passwordInput)) {
        validationErrors.passwordInput =
            "Password must contain at least 8 characters, uppercase, lowercase and number";
    }

    const phoneRegExp = /^\+380\s?\d{2}\s?\d{3}\s?\d{3}$/;
    if (!phoneRegExp.test(formData.phoneInput)) {
        validationErrors.phoneInput = "Invalid phone number";
    }


}