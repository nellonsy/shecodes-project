let today = new Date();
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = days[today.getDay()];



let hour = today.getHours();
let minute = today.getMinutes();


let datetxt = document.querySelector("#datetxt"); 

datetxt.innerHTML = `${day} ${hour}:${minute}`;


let temperature = document.querySelector("#temp");
let Ctemp;


function convertToF(event){
  event.preventDefault;
  
  let Ftemp = (Ctemp * 9) / 5 + 32;

  temperature.innerHTML = Math.round(Ftemp);
  fahrenheit.setAttribute("class", "not-active");
  celsius.setAttribute("class", "active");

}

function convertToC(event){
  event.preventDefault;
  temperature.innerHTML = Math.round(Ctemp);
  celsius.setAttribute("class", "not-active");
  fahrenheit.setAttribute("class", "active");


}



function showtemp(response){

  Ctemp = response.data.main.temp;

  let city = document.querySelector("#citynametxt");
  city.innerHTML = response.data.name;

  temperature.innerHTML = Math.round(response.data.main.temp);


  let weatherMain = document.querySelector("#icon");

  let minTemp = document.querySelector("#min");
  minTemp.innerHTML = Math.round(response.data.main.temp_min);

  let maxTemp = document.querySelector("#max");
  maxTemp.innerHTML = Math.round(response.data.main.temp_max);

  weatherMain.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`)

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

  

   let url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c0938b4e6cbdb62dd871240014316343&units=metric`;
   axios.get(url).then(showtemp);
}

function setCity(event) {
  event.preventDefault();

  
  
 
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=44dafd052968a35940015054b955f026&units=metric`;
  
  axios.get(url).then(showtemp);
}

  




navigator.geolocation.getCurrentPosition(starter);






addEventListener("submit", setCity);


let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");

fahrenheit.addEventListener("click", convertToF);
celsius.addEventListener("click", convertToC);


