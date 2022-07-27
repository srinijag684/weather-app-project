function displayTemp(response){
  let temperatureElement = document.querySelector("#temp");
  let countryElement = document.querySelector("#Country");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  countryElement.innerHTML =response.data.name;
  dateElement.innerHTML = "Friday 5.00pm"
  console.log(response.data);
}

let apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=Japan&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);

//console.log("Im running");