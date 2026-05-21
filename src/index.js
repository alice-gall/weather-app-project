function displayWeather(response) {
  let currentTemperatureValue = document.querySelector("#temperature-value");
  let temperature = Math.round(response.data.temperature.current);
  currentTemperatureValue.innerHTML = temperature;
  let cityTitleElement = document.querySelector("h1");
  let city = response.data.city;
  cityTitleElement.innerHTML = city;
}

function searchCityWeather(city) {
  let apiKey = "d043896d344020fed4co182b1f4a0tb8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayWeather);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-bar");

  searchCityWeather(searchInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

searchCityWeather("Valletta");

let time = new Date();

function displayTime(date) {
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
  let hour = date.getHours();
  let minutes = date.getMinutes();

  return `${day} ${hour}:${minutes}`;
}

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = displayTime(time);
