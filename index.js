//let city = prompt("Enter a city");
//let ans = city.toLowerCase();

//if (ans === "paris") {
//  alert("It is currently 19°C in Paris with a humidity of 80%");
//} else {
//  alert(
//    `Sorry, we don't know the weather for this city.Try going to https://www.google.com/search?q=weather+${city}`
//  );
//}
console.log("Hello")
let now = new Date();
let p = document.querySelector("p");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let mins = now.getMinutes();
if (mins < 10) {
  mins = `0${mins}`;
}

p.innerHTML = `${day},  ${hours}:${mins}`;
console.log(day)

function search(event) {
  event.preventDefault();
  let searchCity = document.querySelector("#city-input");
  let cityElement = document.querySelector("#Country");
  cityElement.innerHTML = searchCity.value;
}

let searchForm = document.querySelector("#searchCity");
searchForm.addEventListener("submit", search);