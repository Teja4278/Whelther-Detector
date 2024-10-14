//   Current Date and Time
function currentTime(){

    let today = new Date()
    let dayOfWeek = today.getDay()

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let todayDay = days[dayOfWeek]
    let hours = today.getHours()
    let minutes = today.getMinutes()
    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    let timeString = hours + ':' + minutes;
    document.getElementById("dayTime").textContent = `${todayDay} ${timeString}`
   }
   currentTime();
   setInterval(currentTime, 1000);

//    weatherReport Function
   
function weatherReport() {
    let city = document.getElementById("city").value; 
    fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
        .then((response) => {
            return response.json();
        })
        .then((weatherData) => { // Renamed to weatherData
            console.log(weatherData);

            // Getting the data with the help of DOM from HTML
            document.getElementById("temperature").textContent = `${weatherData.days[0].temp}°C`;
            document.getElementById("location").textContent = `${weatherData.resolvedAddress}`;
            document.getElementById("cloud").textContent = `${weatherData.currentConditions.conditions}`;
        })
        .catch((error) => {
            console.error("Error fetching weather data: ", error);
        });
}
