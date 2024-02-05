

var email = document.getElementById('em');
var passwordInput = document.getElementById('pwd');
var err2 = document.getElementById('err2');
var phoneNumberInput = document.getElementById('phone');
var err3 = document.getElementById('err3');
var passwordStrengthDiv = document.getElementById('passwordStrength');

email.addEventListener('blur', validateEmail);
passwordInput.addEventListener('input', validatePassword);
phoneNumberInput.addEventListener('input', validatePhoneNumber);

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
function validatePhoneNumber() {
    var phoneNumber = phoneNumberInput.value.replace(/[^\d]/g, ''); // Remove non-numeric characters

    // Check for specific formats: XXX-XXX-XXXX, XXXX-XXX-XXX, XXXX-XXXXXX
    if (/^\d{10}$/.test(phoneNumber) || /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber) || /^\d{4}-\d{3}-\d{3}$/.test(phoneNumber) || /^\d{4}-\d{6}$/.test(phoneNumber)) {
        err3.innerText = "Phone number is valid"; // Clear error message if phone number is valid
    } else {
        err3.innerText = "Phone number not valid";
    }
}
   
