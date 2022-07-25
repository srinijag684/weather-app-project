function displayTemp(response){
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");

  celsiusTemperature = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(celsiusTemperature);
  cityElement.innerHTML = response.data.name;
}

let apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Japan&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);