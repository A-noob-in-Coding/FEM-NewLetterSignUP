let email_input = document.getElementById("email-input");
let dismiss_btn = document.getElementById("dismiss-btn")
let submit_btn = document.getElementById("submit-btn")
let main = document.querySelector("main")
let success_container = document.getElementById("success-container");
let email = ""
let error_el = document.getElementById("error")
let span_email = document.getElementById("user_email")

span_email.innerText = "example@gmail.com"
// event listeners
submit_btn.addEventListener("click", () =>{
    if( validateEmail(email)){
        main.style.display = "none"
        success_container.style.display = "flex"
        span_email.innerText = email
        email_input.style.borderColor = "black"
        error_el.style.display = "none"
    }
    else{
        email_input.style.borderColor = "red"
        error_el.style.display = "block"
    }
})

dismiss_btn.addEventListener("click", ()=>{
    main.style.display = "flex"
    success_container.style.display = "none"
})

email_input.addEventListener("input" , ()=>{
    email = email_input.value
})

//functions
function validateEmail(email) {
    // Regular expression for validating an email address without symbols before @
    const emailRegex = /^[a-zA-Z0-9.]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}