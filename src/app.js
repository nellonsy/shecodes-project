let today = new Date();
let days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
let day = days[today.getDay()];



let hour = today.getHours();
let minute = today.getMinutes();

let datetxt = document.querySelector("#datetxt"); 

datetxt.innerHTML = `${day} ${hour}:${minute}`;

function showtemp(response){
  let temperature = document.querySelector("#temp");
  temperature.innerHTML = Math.round(response.data.main.temp);
 
 
 }

let input = document.querySelector("#name");
function setCity(event) {
  event.preventDefault();
 
  
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=44dafd052968a35940015054b955f026`;
  let city = document.querySelector("#citynametxt");
  city.innerHTML = input.value;
  axios.get(url).then(showtemp);
}

  









addEventListener("click", setCity);

