

function validation() {
    // Regex for email test
    var eval = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    // Holds the first name entered by the user
    var firstName = document.getElementById('firstName').value;

    console.log(firstName);

    // Array that holds all of the target1 class elements
    var target1 = document.querySelectorAll('.target1')

    console.log(target1);

    // Holds the last name entered by the user
    var lastName = document.getElementById('lastName').value;

    console.log(lastName);

    // Array that holds all of the target2 class elements
    var target2 = document.querySelectorAll('.target2')

    console.log(target2);

    // Holds the email address entered by the user
    var email = document.getElementById('email').value;

    console.log(email);

    // Array that holds all of the target3 class elements
    var target3 = document.querySelectorAll('.target3')

    console.log(target3);

    // Holds the password entered by the user
    var password = document.getElementById('password').value;

    console.log(password);

    // Array that holds all of the target4 class elements
    var target4 = document.querySelectorAll('.target4')

    console.log(target4);

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
    if (firstName === '') {
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