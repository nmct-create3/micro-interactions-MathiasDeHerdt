
// globale veriabelen voor later gebruik
let email = {}
let password = {}
let signInButton;

// helper functions
const isValidEmailAddress = function(emailAddress){
    // email adres checken
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue){
    return !fieldValue || !fieldValue.length;
};

const getDOMElements = function(){
    email.field = document.querySelector('.js-email-field');
    email.errorMessage = document.querySelector('.js-email-error-message');
    email.input = document.querySelector('.js-email-input');
    console.log(email);

    password.field = document.querySelector('.js-password-field');
    password.errorMessage = document.querySelector('.js-password-error-message');
    password.input = document.querySelector('.js-password-input');
    console.log(password);

    signInButton = document.querySelector('.js-sign-in-button');
}

const enableListeners = function(){
    // blur event
    email.input.addEventListener('blur', function(){
        if (isEmpty(email.input.value)){
            addErrors(email.field, email.errorMessage, "This field is requird")
        } else {
            removeErrors(email.field, email.errorMessage)
        }
    })
    password.input.addEventListener('blur', function(){});

    // click event knop
    signInButton.addEventListener('click', function(){});
}

const addErrors = function(formField, errorField, errorMessage){
    formField.classList.add('has-error')
    errorField.style.display = 'block';
    errorField.innerHTML = errorMessage
}
const removeErrors = function(formField, errorField){
    formField.classList.remove('has-error')
    errorField.style.display = 'none'
    
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Validation loaded!');
    getDOMElements();
    // isValidEmailAddress();
    enableListeners();
});


/*
let email = {},
    password = {},
    signInButton;

const getDOMlements = () => {
    email.input = document.querySelector(".js-email-input");
    email.message = document.querySelector(".js-email-message");
    email.field = document.querySelector(".js-email-field");
    password.input = document.querySelector(".js-password-input");
    password.message = document.querySelector(".js-password-message");
    password.field = document.querySelector(".js-password-field");
    signInButton = document.querySelector(".js-sign-in-button");
    enableListeners();
};

const doubleCheckEmail = () => {
    if (!isEmpty(email.input.value) && !isValid(email)) {
        addErrors(email, "Invalid email");
    } else {
        removeErrors(email);
    }
};
const doubleCheckPassword = () => {
    if (!isEmpty(password.input.value) && !isValid(password)) {
        addErrors(password, "Invalid password");
    } else {
        removeErrors(password);
    }
};

const enableListeners = () => {
    email.input.addEventListener("blur", () => {
        if (!isValid(email)) {
            email.input.addEventListener("input", doubleCheckEmail);
            isEmpty(email.input.value) == false ?
                addErrors(email, "Invalid email") :
                addErrors(email, "This field is required");
        } else {
            email.input.removeEventListener("input", doubleCheckEmail);
        }
    });
    password.input.addEventListener("blur", () => {
        if (!isValid(password)) {
            password.input.addEventListener("input", doubleCheckPassword);
            isEmpty(password.input.value) == false ?
                addErrors(password, "Invalid password") :
                addErrors(password, "This field is required");
        } else {
            password.input.removeEventListener("input", doubleCheckPassword);
        }
    });
    signInButton.addEventListener("click", (event) => {
        event.preventDefault();
        if ((isValid(email) && !isEmpty(email.input.value)) && (isValid(password) && !isEmpty(password.input.value))) {
            console.log(email.input.value);
            console.log(password.input.value);
        }
    });
};

const addErrors = (obj, message) => {
    obj.message.innerHTML = message;
    obj.field.classList.add("has-error");
};
const removeErrors = (obj) => {
    obj.message.innerHTML = "";
    obj.field.classList.remove("has-error");
};

const isValid = (obj) => {
    if (obj === email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.input.value);
    } else if (obj === password) {
        return obj.input.value.length > 1;
    } else {
        return false;
    }
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
};


document.addEventListener("DOMContentLoaded", function() {
    console.log("Script loaded!");
    getDOMlements();
});

*/