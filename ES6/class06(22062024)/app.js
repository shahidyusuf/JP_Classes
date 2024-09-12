const API_KEY = "d7459cda9c587d88651a67e428cc1289";
const input = document.getElementById("searchInput");
const showData = document.getElementById("showData");

const searchWeather = async() => {
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid={API key}`;

    showData.innerHTML = `<div class = "spinner-grow text-danger" role="status"></div>
    <h2>Loading ... !</h2>`

    const response = await fetch(API);
    const data = await response.json();
    console.log(data);

    showWeatherData(data);

}