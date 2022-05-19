// Retrieves the value of the checked radio button, outputs it to the rating element, and changes the display values for two elements
function submitRating() {
  // Get the values from the radio buttons
  var radios = document.getElementsByName("rateradio");
  console.log(radios);

  // Loop through the radios object
  for (var radio of radios) {
    // If one is checked
    if (radio.checked) {
      // Assign the chosen value to the rating element
      document.getElementById("rating").innerHTML = radio.value;
    }
  }

  // Make startbox invisible
  document.getElementById("startbox").style.display = "none";

  // Make endbox visible
  document.getElementById("endbox").style.display = "block";
}
