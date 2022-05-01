// Validates an email address and returns an error message when it's incorrect or empty
function emailValidation() {
    // Regex for email test
    var eval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // Holds the email address entered by the user
    var email = document.getElementById('email').value;

    // Array that holds all of the elements that will change
    var target = document.querySelectorAll('.target');

    // Array that holds all of the elements that will change when the email is empty
    var target1 = document.querySelectorAll('.target1');


    // Array that holds all of the elements that will change when the email is incorrect
    var target2 = document.querySelectorAll('.target2');

    // For every element in the target array
    for (let i = 0; i < target.length; i++) {
        // Remove all error notifications
        target[i].classList.remove("show");
    }

    // If the email is empty
    if (email === '') {
        // For every element in the target array
        for (let i = 0; i < target1.length; i++) {
            // Add all empty error notifications
            target1[i].classList.add("show");
        }
        // If the email fails the regex test
    } else if (!eval.test(email)) {
        // For every element in the target array
        for (let i = 0; i < target2.length; i++) {
            // Add all incorrect error notifications
            target2[i].classList.add("show");
        }
    } 
}