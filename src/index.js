let apiKey = "f6c17ad232aa886321714b7bb48bbe9a";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Japan&appid=${apiKey}&units=metric`;

function displayTemp(){
  console.log(Response.data)
}

axios.get(apiUrl).then(displayTemp);