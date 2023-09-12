let today = new Date();
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = days[today.getDay()];



let hour = today.getHours();
let minute = today.getMinutes();


let datetxt = document.querySelector("#datetxt"); 

datetxt.innerHTML = `${day} ${hour}:${minute}`;

let convert = document.querySelector("#convert")




function showtemp(response){

  let city = document.querySelector("#citynametxt");
  city.innerHTML = response.data.name;

  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp) + "°C";


  let weatherMain = document.querySelector("#icon");

  let minTemp = document.querySelector("#min");
  minTemp.innerHTML = Math.round(response.data.main.temp_min) + "°C";

  let maxTemp = document.querySelector("#max");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max) + "°C";


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

  let windSpeed = document.querySelector('#WindSpeed');
  windSpeed.innerHTML = response.data.wind.speed;

  let visibility = document.querySelector('#Visibility');
  visibility.innerHTML = (response.data.visibility)/1000;

  let Pressure = document.querySelector('#Pressure');
  Pressure.innerHTML = response.data.main.pressure;

 
 }

let input = document.querySelector("#name");

function starter (position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(lon,lat);

  

   let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c0938b4e6cbdb62dd871240014316343&units=metric`;
   axios.get(url).then(showtemp);
}

function setCity(event) {
  event.preventDefault();

  
  
 
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=44dafd052968a35940015054b955f026&units=metric`;
  
  axios.get(url).then(showtemp);
}

  




navigator.geolocation.getCurrentPosition(starter);





addEventListener("click", setCity);



