// shareShow toggles the show state of several elements depending on which button is pushed
function shareShow(bid) {
    // If the viewport is less than 768px
    if (window.innerWidth < 768) {
        // Take the bid
        switch (bid) {
            // If the bid is 1
            case 1:
                // Don't show footer 1
                document.getElementById("footer1").classList.remove("show");
                // Show footer 2
                document.getElementById("footer2").classList.add("show");
                // Break the loop
                break;
            // If the bid is 2
            case 2:
                // Don't show footer 2
                document.getElementById("footer2").classList.remove("show");
                // Show footer 1
                document.getElementById("footer1").classList.add("show");
                // Break the loop
                break;
        }
    // If the viewport is 768px or more
    } else {
        // Take the bid
        switch (bid) {
            // If the bid is 1
            case 1:
                // Don't show arrow button 1
                document.getElementById("arrowbtn1").classList.remove("show");
                // Show arrow button 3
                document.getElementById("arrowbtn3").classList.add("show");
                // Show footer 2
                document.getElementById("footer2").classList.add("show");
                // Break the loop
                break;
                // If the bid is 3
            case 3:
                // Don't show footer 2
                document.getElementById("footer2").classList.remove("show");
                // Don't show arrow button 3
                document.getElementById("arrowbtn3").classList.remove("show");
                // Show arrow button 1
                document.getElementById("arrowbtn1").classList.add("show");
                // Break the loop
                break;
        }
    }
}