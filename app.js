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
// Day wise Temperature for every hour
document.getElementById("zero").textContent = `${weatherData.days[0].hours[0].temp}°C`;
document.getElementById("one").textContent = `${weatherData.days[0].hours[1].temp}°C`;
document.getElementById("two").textContent = `${weatherData.days[0].hours[2].temp}°C`;
document.getElementById("three").textContent = `${weatherData.days[0].hours[3].temp}°C`;
document.getElementById("four").textContent = `${weatherData.days[0].hours[4].temp}°C`;
document.getElementById("five").textContent = `${weatherData.days[0].hours[5].temp}°C`;
document.getElementById("six").textContent = `${weatherData.days[0].hours[6].temp}°C`;
document.getElementById("seven").textContent = `${weatherData.days[0].hours[7].temp}°C`;
document.getElementById("eight").textContent = `${weatherData.days[0].hours[8].temp}°C`;
document.getElementById("nine").textContent = `${weatherData.days[0].hours[9].temp}°C`;
document.getElementById("ten").textContent = `${weatherData.days[0].hours[10].temp}°C`;
document.getElementById("eleven").textContent = `${weatherData.days[0].hours[11].temp}°C`;
document.getElementById("twelve").textContent = `${weatherData.days[0].hours[12].temp}°C`;
document.getElementById("thirteen").textContent = `${weatherData.days[0].hours[13].temp}°C`;
document.getElementById("fourteen").textContent = `${weatherData.days[0].hours[14].temp}°C`;
document.getElementById("fifteen").textContent = `${weatherData.days[0].hours[15].temp}°C`;
document.getElementById("sixteen").textContent = `${weatherData.days[0].hours[16].temp}°C`;
document.getElementById("seventeen").textContent = `${weatherData.days[0].hours[17].temp}°C`;
document.getElementById("eighteen").textContent = `${weatherData.days[0].hours[18].temp}°C`;
document.getElementById("ninteen").textContent = `${weatherData.days[0].hours[19].temp}°C`;
document.getElementById("twenty").textContent = `${weatherData.days[0].hours[20].temp}°C`;
document.getElementById("twentyOne").textContent = `${weatherData.days[0].hours[21].temp}°C`;
document.getElementById("twentyTwo").textContent = `${weatherData.days[0].hours[22].temp}°C`;
document.getElementById("twentyThree").textContent = `${weatherData.days[0].hours[23].temp}°C`;
