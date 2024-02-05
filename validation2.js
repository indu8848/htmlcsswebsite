



var email = document.getElementById('email');
var passwordInput = document.getElementById('password');
var err2 = document.getElementById('err2');
var passwordStrengthDiv = document.getElementById('passwordStrengthDiv');

email.addEventListener('blur', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateEmail() {
    var emailRegex = /^([a-zA-Z0-9.-_]+)@([a-zA-Z0-9-]+)\.([a-z]{2,3})(\.[a-zA-Z]{2,3})?$/;

    if (emailRegex.test(email.value)) {
        err2.innerText = "Email is valid";
        return true;
    } else {
        err2.innerText = "Email is invalid";
        return false;
    }
}

function validatePassword() {
    var password = passwordInput.value;

    // Minimum 8 characters, at least one uppercase, one lowercase, and one number
    var strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    var mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/;

    if (strongRegex.test(password)) {
        passwordStrengthDiv.innerText = "Password strength: Strong";
        passwordStrengthDiv.style.color = "green";
        passwordInput.style.border = "2px solid green";
    } else if (mediumRegex.test(password)) {
        passwordStrengthDiv.innerText = "Password strength: Medium";
        passwordStrengthDiv.style.color = "orange";
        passwordInput.style.border = "2px solid orange";
    } else {
        passwordStrengthDiv.innerText = "Password strength: Poor";
        passwordStrengthDiv.style.color = "red";
        passwordInput.style.border = "2px solid red";
    }
}





