// Get array of the elements with class='input'
var input = document.querySelectorAll('.input');

// For each element in the input array
for (let i = 0; i < input.length; i++) {
    // Add an event listener that adds class='focus' to the parent element when it is onfocus
    input[i].addEventListener("focus", ()=>{input[i].parentNode.classList.add('focus');});

    // Add an event listener that removes class='focus' from the parent element when it is onblur
    input[i].addEventListener("blur", ()=>{input[i].parentNode.classList.remove('focus');});
}

// Validates the user input in the sign-up form
// Activates when #submitbtn is clicked
function validation() {
    // Regex for email test
    var eval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/


    // Holds the first name entered by the user
    var firstName = document.getElementById('firstName').value;

    // Array that holds all of the target1 class elements
    // These elements are affected by the firstName validation
    var target1 = document.querySelectorAll('.target1')


    // Holds the last name entered by the user
    var lastName = document.getElementById('lastName').value;

    // Array that holds all of the target2 class elements
    // These elements are affected by the lastName validation
    var target2 = document.querySelectorAll('.target2')


    // Holds the email address entered by the user
    var email = document.getElementById('email').value;

    // Array that holds all of the target3 class elements
    // These elements are affected by the email validation
    var target3 = document.querySelectorAll('.target3')


    // Holds the password entered by the user
    var password = document.getElementById('password').value;

    // Array that holds all of the target4 class elements
    // These elements are affected by the password validation
    var target4 = document.querySelectorAll('.target4')

    
    // If firstName is empty
    if (firstName === '') {
        // For every element in the target array
        for (let i = 0; i < target1.length; i++) {
            // Add all error notifications
            target1[i].classList.add("show");
        }
    // If firstName is not empty
    } else {
        // For every element in the target array
        for (let i = 0; i < target1.length; i++) {
            // Remove all error notifications
            target1[i].classList.remove("show");
        }
    }

    // If lastName is empty
    if (lastName === '') {
        // For every element in the target array
        for (let i = 0; i < target2.length; i++) {
            // Add all error notifications
            target2[i].classList.add("show");
        }
    // If lastName is not empty
    } else {
        // For every element in the target array
        for (let i = 0; i < target2.length; i++) {
            // Remove all error notifications
            target2[i].classList.remove("show");
        }
    }

    // If the email passes the regex test
    if (eval.test(email)) {
        // For every element in the target array
        for (let i = 0; i < target3.length; i++) {
            // Remove all error notifications
            target3[i].classList.remove("show");
        }
    // If the email fails the regex test
    } else {
        // For every element in the target array
        for (let i = 0; i < target3.length; i++) {
            // Add all error notifications
            target3[i].classList.add("show");
        }
    }

    // If password is empty
    if (password === '') {
        // For every element in the target array
        for (let i = 0; i < target4.length; i++) {
            // Add all error notifications
            target4[i].classList.add("show");
        }
    // If password is not empty
    } else {
        // For every element in the target array
        for (let i = 0; i < target4.length; i++) {
            // Remove all error notifications
            target4[i].classList.remove("show");
        }
    }
}