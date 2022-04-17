// Function to show and hide faq answers
// Receives a number placed in the onclick
function showFAQ(num) {

    // Returns an array of all elements that could be changed when clicked
    var reactions = document.querySelectorAll(".reaction");
  
    // The element named  'a' + num + 'a'
    // One of the arrows
    var anuma = document.getElementById("a" + num + "a");
    
    // The element named  'a' + num + 'b'
    // One of the answer boxes
    var anumb = document.getElementById("a" + num + "b");
   
    // The element named  'q' + num + 'h2'
    // One of the question
    var qnumh2 = document.getElementById("q" + num + "h2");

    // If the arrow being clicked contains a class named show
    if (anumb.classList.contains('show')) {

        // Loop through everything that could be changed
        for(let i = 0; i < reactions.length; i++) {
            // Take .show off everything
            reactions[i].classList.remove("show");
        }
    } else {

        // Loop through everything that could be changed
        for (let i = 0; i < reactions.length; i++) {
            // Take .show off everything
            reactions[i].classList.remove("show");
        }

        /* Add show to the arrow that was clicked */
        anuma.classList.add("show");

        /* Add show to the answer box that was clicked */
        anumb.classList.add("show");

        /* Add show to the question that was clicked  */
        qnumh2.classList.add("show");
    }
}