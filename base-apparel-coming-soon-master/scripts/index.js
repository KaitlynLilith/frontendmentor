// Validates an email address and returns an error message when it's incorrect
function emailValidation() {
    // Regex for email test
    var eval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // Holds the email address entered by the user
    var email = document.getElementById('email').value;

    // Array that holds all of the elements that will change
    var target = document.querySelectorAll('.target');

    // If the email passes the regex test
    if (eval.test(email)) {
        // For every element in the target array
        for (let i = 0; i < target.length; i++) {
            // Remove all error notifications
            target[i].classList.remove("show");
        }
    // If the email fails the regex test
    } else {
        // For every element in the target array
        for (let i = 0; i < target.length; i++) {
            // Add all error notifications
            target[i].classList.add("show");
        }
    }
}