function displayTemp(response){
  let temperatureElement = document.querySelector("#temp");
  temperatureElement = response.data.main.temp;
  console.log("function called") 
}

let apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?
q=Japan&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);

console.log("Im running");