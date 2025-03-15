const getWeather = (city) => {
    cityName.innerHTML = city;
    cityName1.innerHTML = city;

    fetch(`https://api.weatherapi.com/v1/current.json?key=480924718efd432a811174516251303&q=${city}`)
        .then(response => response.json())
        .then((response) => {
            console.log(response); // Check response in console
            const weather = response.current; // Access `current` object

            cloud.innerHTML = weather.cloud;
            temp_c1.innerHTML = weather.temp_c;
            feelslike_c.innerHTML = weather.feelslike_c;
            humidity.innerHTML = weather.humidity;
            humidity1.innerHTML = weather.humidity;
            temp_c.innerHTML = weather.temp_c;
            temp_f.innerHTML = weather.temp_f;
            wind_kph.innerHTML = weather.wind_kph;
            wind_kph1.innerHTML = weather.wind_kph;
            wind_degree.innerHTML = weather.wind_degree;
            uv.innerHTML = weather.uv;
        })
        .catch(err => console.error("Error fetching weather data:", err));
};

submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value);
});

getWeather("Kolkata");
