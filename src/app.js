let today = new Date();
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = days[today.getDay()];



let hour = today.getHours();
let minute = today.getMinutes();

let datetxt = document.querySelector("#datetxt"); 

datetxt.innerHTML = `${day} ${hour}:${minute}`;

function showtemp(response){
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp) + "°C";


  let weatherMain = document.querySelector("#icon");


  if(response.data.weather[0].main== 'Clear'){
    weatherMain.innerHTML = "🛤️";
  } else if (response.data.weather[0].main == 'Rain'){
    weatherMain.innerHTML = "☔";
  } else if (response.data.weather[0].main == 'Clouds'){
    weatherMain.innerHTML = "☁️";
  } else if (response.data.weather[0].main == 'Snow'){
    weatherMain.innerHTML = "❄️";
  } else if (response.data.weather[0].main == 'Thunderstorm'){
    weatherMain.innerHTML = "⛈️";
  } else if (response.data.weather[0].main == 'Drizzle'){
    weatherMain.innerHTML = "💧";
  } else if (response.data.weather[0].main == 'Tornado'){
    weatherMain.innerHTML = "🌪️";
  } else {
    weatherMain.innerHTML = "🌫️";
  }

  let description = document.querySelector('#detail');
  description.innerHTML = response.data.weather[0].description;

  let feelslike = document.querySelector("#feelslike");
  feelslike.innerHTML = Math.round(response.data.main.feels_like);

  let humidity = document.querySelector("#Humidity");
  humidity.innerHTML = response.data.main.humidity;

  console.log(response.data.main.feels_like)
 
 }

let input = document.querySelector("#name");



function setCity(event) {
  event.preventDefault();
 
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=44dafd052968a35940015054b955f026&units=metric`;
  let city = document.querySelector("#citynametxt");
  city.innerHTML = input.value;
  axios.get(url).then(showtemp);
}

  









addEventListener("click", setCity);

