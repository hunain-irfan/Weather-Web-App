
let searchInput = document.getElementById('search-input');
let searchIcon = document.getElementById('search-icon');
let tempImg = document.querySelector('.temp-img');
let celcius = document.getElementById('celcius');
let temperatureInfo = document.querySelector('#temperature-info');
let date = document.getElementById('date');
let weekDay = document.getElementById('week-day');
let time = document.getElementById('time');
let cityy = document.getElementById('city');
let windMeter = document.getElementById('wind-meter');
let HumadityMeter = document.getElementById('Humadity-meter');
let feelMeter = document.getElementById('feel-meter');
let uvIndexMeter = document.getElementById('uv_index-meter');
let pressureMeter = document.getElementById('pressure-meter');
let chanceOfRainMeter = document.getElementById('change_of_rain-meter');
let averageTemperature = document.getElementById('average-Temperature');
let SunRiseMeter =  document.querySelector('.sun-rise-meter');
let SunSetMeter =   document.querySelector('.sun-set-meter');
let MoonRiseMeter = document.querySelector('.moon-rise-meter');
let MoonSetMeter =  document.querySelector('.moon-set-meter');


searchIcon.addEventListener('click', () => {
    const apiKey = "1a0663bc62df4c0ab3251528233010";
    const city = searchInput.value;
    const days = 1;

    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=${days}&aqi=no&alerts=no`;

    // Making the API call using the Fetch API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            celcius.innerHTML = data.current.temp_c;
            tempImg.src = data.current.condition.icon;
            temperatureInfo.innerHTML = data.current.condition.text;
            if (data.location.localtime) {
                const [datePart, timePart] = data.location.localtime.split(' ');
                date.innerHTML = datePart;

                const customDate = new Date(data.location.localtime);
                const customWeekday = customDate.toLocaleString('en-US', { weekday: 'long' });
                weekDay.innerHTML = customWeekday;


                const localtime = new Date(data.location.localtime);
                const formattedTime = localtime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
                time.innerHTML = formattedTime;
            }
            cityy.innerHTML = data.location.name;
            windMeter.innerHTML = data.current.wind_kph;
            HumadityMeter.innerHTML = data.current.humidity;
            feelMeter.innerHTML = data.current.feelslike_c;
            uvIndexMeter.innerHTML = data.current.uv;
            pressureMeter.innerHTML = data.current.pressure_mb;
            chanceOfRainMeter.innerHTML = data.forecast.forecastday[0].day.daily_chance_of_rain;
            averageTemperature.innerHTML = data.forecast.forecastday[0].day.avgtemp_c;
            SunRiseMeter.innerHTML = data.forecast.forecastday[0].astro.sunrise;
            SunSetMeter.innerHTML = data.forecast.forecastday[0].astro.sunset;
            MoonRiseMeter.innerHTML = data.forecast.forecastday[0].astro.moonrise;
            MoonSetMeter.innerHTML = data.forecast.forecastday[0].astro.moonset;

            console.log("Weather API Response:", data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
})

const data = {
    "localtime": "2023-11-06 13:53"
};

