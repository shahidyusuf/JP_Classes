window.addEventListener('load', () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const apiKey = 'd7459cda9c587d88651a67e428cc1289';
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

            fetch(api)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { name } = data;
                    const { temp } = data.main;
                    const { description, icon } = data.weather[0];

                    document.getElementById('location').textContent = name;
                    document.getElementById('temperature').textContent = `${temp}°C`;
                    document.getElementById('description').textContent = description;
                    document.getElementById('icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png">`;
                })
                .catch(error => {
                    console.error('Error fetching weather data:', error);
                });
        });
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
