function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}

function displayForecast() {
  let forecastElement = document.querySelector("#week");

  let days = ["Thu", "Fri", "Sat", "Sun"];

  let forecastHTML = `<div class="row">`;
  days.forEach(function (day) {
    forecastHTML =
      forecastHTML +
      `
      <div class="col-2">
        <div class="weather-forecast-date">${day}</div>
        <img
          src="http://openweathermap.org/img/wn/50d@2x.png"
          alt=""
          width="42"
        />
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max"> 18° </span>
          <span class="weather-forecast-temperature-min"> 12° </span>
        </div>
      </div>
  `;
  });

  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
  console.log(forecastHTML);
}


function displayTemp(response){
  let temperatureElement = document.querySelector("#temp");
  let countryElement = document.querySelector("#Country");
  let dateElement = document.querySelector("#date");
  let iconElement = document.querySelector("#icon");
  let descELement = document.querySelector("#desc");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  countryElement.innerHTML =response.data.name;
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  descELement.innerHTML = response.data.weather[0].description;
  windElement.innerHTML = Math.round(response.data.wind.speed);


  let icon = response.data.weather[0].icon;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${icon}@2x.png`
    );

  //console.log(response.data);
}

function search(city){
  let apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemp);
}


function submit(event){
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  //console.log(cityInputElement.value);
  search(cityInputElement.value);
}

search("Singapore");
displayForecast();

let form = document.querySelector("#searchCity");
form.addEventListener("submit", submit);

//console.log("Im running");