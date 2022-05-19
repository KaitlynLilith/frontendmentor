// const textData = fetch(
//   "https://drive.google.com/file/d/1JVr1OqiPzzGtuHStHrSChYQxMYEDxzaH/view?usp=sharing"
// )
//   .then((response) => response.json())
//   .then((jsondata) => jsondata);
// console.log(textData);

// const xhttp = new XMLHttpRequest();
// xhttp.open(
//   "GET",
//   "https://drive.google.com/file/d/1JVr1OqiPzzGtuHStHrSChYQxMYEDxzaH/view?usp=sharing"
// );
// xhttp.onload = function () {
//   //   let jsonData = JSON.parse(xhttp.responseText);
//   //   console.log(jsonData);
// };
// xhttp.send();

// const myRequest = new XMLHttpRequest();
// myRequest.open(
//   "GET",
//   "https://drive.google.com/file/d/1JVr1OqiPzzGtuHStHrSChYQxMYEDxzaH/view?usp=sharing"
// );
// myRequest.onload = function () {
//   // console.log(myRequest.responseText);
//   let name = JSON.parse(myRequest.responseText);
//   console.log(name.person.name);
// };
// myRequest.send();

// console.log(myRequest);

// const textData = fetch("https://drive.google.com/file/d/1JVr1OqiPzzGtuHStHrSChYQxMYEDxzaH/view?usp=sharing")
//   .then((response) => response.json())
//   .then((jsondata) => jsondata);

// Array of objects to extract values
const data = [
  {
    title: "Work",
    timeframes: {
      daily: {
        current: 5,
        previous: 7,
      },
      weekly: {
        current: 32,
        previous: 36,
      },
      monthly: {
        current: 103,
        previous: 128,
      },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: {
        current: 1,
        previous: 2,
      },
      weekly: {
        current: 10,
        previous: 8,
      },
      monthly: {
        current: 23,
        previous: 29,
      },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 7,
      },
      monthly: {
        current: 13,
        previous: 19,
      },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: {
        current: 1,
        previous: 1,
      },
      weekly: {
        current: 4,
        previous: 5,
      },
      monthly: {
        current: 11,
        previous: 18,
      },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: {
        current: 1,
        previous: 3,
      },
      weekly: {
        current: 5,
        previous: 10,
      },
      monthly: {
        current: 21,
        previous: 23,
      },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: {
        current: 0,
        previous: 1,
      },
      weekly: {
        current: 2,
        previous: 2,
      },
      monthly: {
        current: 7,
        previous: 11,
      },
    },
  },
];

// Get all the toggle switches
var toggles = document.querySelectorAll(".toggle");

// Display the daily hours when loading
daily();

// Changes the hours to daily numbers
function daily() {
  // For every element in the toggles array
  for (let i = 0; i < toggles.length; i++) {
    // Remove all highlights
    toggles[i].classList.remove("show");
  }

  // Add highlight to 'Daily'
  document.getElementById("daily").classList.add("show");

  // Display current daily work hours
  document.getElementById("hours2").innerHTML =
    data[0].timeframes.daily.current + "hrs";

  // Display previous daily work hours
  document.getElementById("prev2").innerHTML =
    "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

  // Display current daily play hours
  document.getElementById("hours3").innerHTML =
    data[1].timeframes.daily.current + "hrs";

  // Display previous daily play hours
  document.getElementById("prev3").innerHTML =
    "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

  // Display current daily study hours
  document.getElementById("hours4").innerHTML =
    data[2].timeframes.daily.current + "hrs";

  // Display previous daily study hours
  document.getElementById("prev4").innerHTML =
    "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

  // Display current daily exercise hours
  document.getElementById("hours5").innerHTML =
    data[3].timeframes.daily.current + "hrs";

  // Display previous daily exercise hours
  document.getElementById("prev5").innerHTML =
    "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

  // Display current daily social hours
  document.getElementById("hours6").innerHTML =
    data[4].timeframes.daily.current + "hrs";

  // Display previous daily social hours
  document.getElementById("prev6").innerHTML =
    "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

  // Display current daily self care hours
  document.getElementById("hours7").innerHTML =
    data[5].timeframes.daily.current + "hrs";

  // Display previous daily self care hours
  document.getElementById("prev7").innerHTML =
    "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
}

// Changes the hours to weekly numbers
function weekly() {
  // For every element in the toggles array
  for (let i = 0; i < toggles.length; i++) {
    // Remove all highlights
    toggles[i].classList.remove("show");
  }

  // Add highlight to 'Weekly'
  document.getElementById("weekly").classList.add("show");

  // Display current weekly work hours
  document.getElementById("hours2").innerHTML =
    data[0].timeframes.weekly.current + "hrs";

  // Display previous weekly work hours
  document.getElementById("prev2").innerHTML =
    "Last Week - " + data[0].timeframes.weekly.previous + "hrs";

  // Display current weekly play hours
  document.getElementById("hours3").innerHTML =
    data[1].timeframes.weekly.current + "hrs";

  // Display previous weekly play hours
  document.getElementById("prev3").innerHTML =
    "Last Week - " + data[1].timeframes.weekly.previous + "hrs";

  // Display current weekly study hours
  document.getElementById("hours4").innerHTML =
    data[2].timeframes.weekly.current + "hrs";

  // Display previous weekly study hours
  document.getElementById("prev4").innerHTML =
    "Last Week - " + data[2].timeframes.weekly.previous + "hrs";

  // Display current weekly exercise hours
  document.getElementById("hours5").innerHTML =
    data[3].timeframes.weekly.current + "hrs";

  // Display previous weekly exercise hours
  document.getElementById("prev5").innerHTML =
    "Last Week - " + data[3].timeframes.weekly.previous + "hrs";

  // Display current weekly social hours
  document.getElementById("hours6").innerHTML =
    data[4].timeframes.weekly.current + "hrs";

  // Display previous weekly social hours
  document.getElementById("prev6").innerHTML =
    "Last Week - " + data[4].timeframes.weekly.previous + "hrs";

  // Display current weekly self care hours
  document.getElementById("hours7").innerHTML =
    data[5].timeframes.weekly.current + "hrs";

  // Display previous weekly self care hours
  document.getElementById("prev7").innerHTML =
    "Last Week - " + data[5].timeframes.weekly.previous + "hrs";
}

// Changes the hours to monthly numbers
function monthly() {
  // For every element in the toggles array
  for (let i = 0; i < toggles.length; i++) {
    // Remove all highlights
    toggles[i].classList.remove("show");
  }

  // Add highlight to 'Monthly'
  document.getElementById("monthly").classList.add("show");

  // Display current monthly work hours
  document.getElementById("hours2").innerHTML =
    data[0].timeframes.monthly.current + "hrs";

  // Display previous monthly work hours
  document.getElementById("prev2").innerHTML =
    "Last month - " + data[0].timeframes.monthly.previous + "hrs";

  // Display current monthly play hours
  document.getElementById("hours3").innerHTML =
    data[1].timeframes.monthly.current + "hrs";

  // Display previous monthly play hours
  document.getElementById("prev3").innerHTML =
    "Last month - " + data[1].timeframes.monthly.previous + "hrs";

  // Display current monthly study hours
  document.getElementById("hours4").innerHTML =
    data[2].timeframes.monthly.current + "hrs";

  // Display previous monthly study hours
  document.getElementById("prev4").innerHTML =
    "Last month - " + data[2].timeframes.monthly.previous + "hrs";

  // Display current monthly exercise hours
  document.getElementById("hours5").innerHTML =
    data[3].timeframes.monthly.current + "hrs";

  // Display previous monthly exercise hours
  document.getElementById("prev5").innerHTML =
    "Last month - " + data[3].timeframes.monthly.previous + "hrs";

  // Display current monthly social hours
  document.getElementById("hours6").innerHTML =
    data[4].timeframes.monthly.current + "hrs";

  // Display previous monthly social hours
  document.getElementById("prev6").innerHTML =
    "Last month - " + data[4].timeframes.monthly.previous + "hrs";

  // Display current monthly self care hours
  document.getElementById("hours7").innerHTML =
    data[5].timeframes.monthly.current + "hrs";

  // Display previous monthly self care hours
  document.getElementById("prev7").innerHTML =
    "Last month - " + data[5].timeframes.monthly.previous + "hrs";
}
