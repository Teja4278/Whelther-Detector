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
// Conversion of Fahrenheit To Celsius in Today Page
function fahrenToCelsius() {
    document.getElementById("temperature").textContent = `${weatherData.days[0].temp}°C`;
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
}
// Conversion of Celsius To Fahrenheit in Today Page
function convertToFahrenheit(celsius) {
    return ((celsius * 9 / 5) + 32).toFixed(1);
}

function celsiusToFahrenheit(weatherData) {
    document.getElementById("temperature").textContent = `${convertToFahrenheit(weatherData.days[0].temp)}°F`;
    document.getElementById("zero").textContent = `${convertToFahrenheit(weatherData.days[0].hours[0].temp)}°F`;
    document.getElementById("one").textContent = `${convertToFahrenheit(weatherData.days[0].hours[1].temp)}°F`;
    document.getElementById("two").textContent = `${convertToFahrenheit(weatherData.days[0].hours[2].temp)}°F`;
    document.getElementById("three").textContent = `${convertToFahrenheit(weatherData.days[0].hours[3].temp)}°F`;
    document.getElementById("four").textContent = `${convertToFahrenheit(weatherData.days[0].hours[4].temp)}°F`;
    document.getElementById("five").textContent = `${convertToFahrenheit(weatherData.days[0].hours[5].temp)}°F`;
    document.getElementById("six").textContent = `${convertToFahrenheit(weatherData.days[0].hours[6].temp)}°F`;
    document.getElementById("seven").textContent = `${convertToFahrenheit(weatherData.days[0].hours[7].temp)}°F`;
    document.getElementById("eight").textContent = `${convertToFahrenheit(weatherData.days[0].hours[8].temp)}°F`;
    document.getElementById("nine").textContent = `${convertToFahrenheit(weatherData.days[0].hours[9].temp)}°F`;
    document.getElementById("ten").textContent = `${convertToFahrenheit(weatherData.days[0].hours[10].temp)}°F`;
    document.getElementById("eleven").textContent = `${convertToFahrenheit(weatherData.days[0].hours[11].temp)}°F`;
    document.getElementById("twelve").textContent = `${convertToFahrenheit(weatherData.days[0].hours[12].temp)}°F`;
    document.getElementById("thirteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[13].temp)}°F`;
    document.getElementById("fourteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[14].temp)}°F`;
    document.getElementById("fifteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[15].temp)}°F`;
    document.getElementById("sixteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[16].temp)}°F`;
    document.getElementById("seventeen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[17].temp)}°F`;
    document.getElementById("eighteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[18].temp)}°F`;
    document.getElementById("ninteen").textContent = `${convertToFahrenheit(weatherData.days[0].hours[19].temp)}°F`;
    document.getElementById("twenty").textContent = `${convertToFahrenheit(weatherData.days[0].hours[20].temp)}°F`;
    document.getElementById("twentyOne").textContent = `${convertToFahrenheit(weatherData.days[0].hours[21].temp)}°F`;
    document.getElementById("twentyTwo").textContent = `${convertToFahrenheit(weatherData.days[0].hours[22].temp)}°F`;
    document.getElementById("twentyThree").textContent = `${convertToFahrenheit(weatherData.days[0].hours[23].temp)}°F`;
}
document.getElementById("cButton").addEventListener("click", function () {
    fahrenToCelsius();
    this.classList.toggle('active');
    document.getElementById("fButton").classList.remove('active')
})

document.getElementById("fButton").addEventListener("click", function () {
    celsiusToFahrenheit(jsonData);
    this.classList.toggle('active')
    document.getElementById("cButton").classList.remove('active')
})

// Adding week data Dynamically
document.getElementById("todayPage").addEventListener("click", function () {
    this.classList.toggle('activeToday')
    document.getElementById("weekPage").classList.remove('activeToday')
    document.getElementById("weekData").style.display = "none"
    document.getElementById("todayData").style.display =""

})

document.getElementById("weekPage").addEventListener("click", function () {
    this.classList.toggle('activeToday');
    document.getElementById("todayData").classList.remove('activeToday')
    document.getElementById("weekData").style.display = "none"
    document.getElementById("todayData").style.display =""

})
  // Adding day wise cards in weekpage Dynamically
            

  document.getElementById("weekPage").addEventListener("click", function () {
    document.getElementById("todayData").style.display = "none"
    document.getElementById("weekData").style.display = ""
    document.getElementById("weekData").innerHTML =
        `
        <section>
        <h6>Wednesday</h6>
        <img src="" alt="img" id="weekImage1">
        <p class = "onedata">${weatherData.days[0].temp}°C</p>
        </section>
        <section>
                    <h6>Thursday</h6>
                    <img src="" alt="img" id="weekImage2">
                    <p class = "twodata">${jsonData.days[1].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Friday</h6>
                    <img src="" alt="img" id="weekImage3">
                    <p class = "threedata">${jsonData.days[2].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Saturday</h6>
                    <img src="" alt="img" id="weekImage4">
                    <p class = "fourdata">${jsonData.days[3].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Sunday</h6>
                    <img src="" alt="img" id="weekImage5">
                    <p class = "fivedata">${jsonData.days[4].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Monday</h6>
                    <img src="" alt="img" id="weekImage6">
                    <p class = "sixdata">${jsonData.days[5].temp}°C</p>
                    </section>
        
                    <section>
                    <h6>Tuesday</h6>
                    <img src="" alt="img" id="weekImage7">
                    <p class = "sevendata">${jsonData.days[6].temp}°C</p>
                    </section>

                  
                    `
                   // Conversion   of Celsius To Fahrenheit in Week page


                document.getElementById("fButton").addEventListener("click", function () {
                    

                    this.classList.toggle('active')
                    document.getElementById("cButton").classList.remove('active')
                    document.querySelector(".twodata").textContent = `${convertToFahrenheit(weatherData.days[1].temp)}°F`
                    document.querySelector(".onedata").textContent = `${convertToFahrenheit(weatherData.days[0].temp)}°F`
                    document.querySelector(".threedata").textContent = `${convertToFahrenheit(weatherData.days[2].temp)}°F`
                    document.querySelector(".fourdata").textContent = `${convertToFahrenheit(weatherData.days[3].temp)}°F`
                    document.querySelector(".fivedata").textContent = `${convertToFahrenheit(weatherData.days[4].temp)}°F`
                    document.querySelector(".sixdata").textContent = `${convertToFahrenheit(weatherData.days[5].temp)}°F`
                    document.getElementById("temperature").textContent = `${convertToFahrenheit(weatherData.days[0].temp)}°F`;
                    document.querySelector(".sevendata").textContent = `${convertToFahrenheit(weatherData.days[6].temp)}°F`
                })
                // Conversion   of Fahrenheit To Celsius  in Week page


                document.getElementById("cButton").addEventListener("click", function () {
                    document.getElementById("temperature").textContent = `${(jsonData.days[0].temp)}°C`;

                    this.classList.toggle('active');
                    document.getElementById("fButton").classList.remove('active')

                    document.querySelector(".onedata").textContent = `${(weatherData.days[0].temp)}°C`
                    document.querySelector(".twodata").textContent = `${weatherData.days[1].temp}°C`
                    document.querySelector(".threedata").textContent = `${weatherData.days[2].temp}°C`
                    document.querySelector(".fourdata").textContent = `${weatherData.days[3].temp}°C`
                    document.querySelector(".fivedata").textContent = `${weatherData.days[4].temp}°C`
                    document.querySelector(".sixdata").textContent =  `${weatherData.days[5].temp}°C`
                    document.querySelector(".sevendata").textContent =`${weatherData.days[6].temp}°C`

                })
                // Week page background images for day cards
                let backImg = [
                    "https://i.ibb.co/qNv7NxZ/pc.webp", 
                    "https://i.ibb.co/RDfPqXz/pcn.jpg", 
                    "https://i.ibb.co/h2p6Yhd/rain.webp", 
                    "https://i.ibb.co/WGry01m/cd.jpg", 
                    "https://i.ibb.co/kqtZ1Gx/cn.jpg"
                ];
                
                let dayImage = [
                    "https://i.ibb.co/PZQXH8V/27.png", 
                    "https://i.ibb.co/Kzkk59k/15.png", 
                    "https://i.ibb.co/kBd2NTS/39.png",  
                    "https://i.ibb.co/rb4rrJL/26.png", 
                    "https://i.ibb.co/1nxNGHL/10.png"
                ];
                
                // Set background image based on the day's icon
                const weatherIcons = {
                    "partly-cloudy-day": backImg[0],
                    "partly-cloudy-night": backImg[1],
                    "rain": backImg[2],
                    "clear-day": backImg[3],
                    "clear-night": backImg[4],
                };
                
                document.getElementById("bgImage").style.backgroundImage = `url(${weatherIcons[weatherData.days[0].icon]})`;
                
                // Set images for each hour
                for (let i = 0; i < 24; i++) {
                    const hourIcon = weatherData.days[0].hours[i]?.icon; // Using optional chaining to avoid errors if hours[i] is undefined
                    if (hourIcon) {
                        const imageId = `${i}Image`; // Construct the image ID
                        document.getElementById(imageId).src = dayImage[getImageIndex(hourIcon)];
                    }
                }
                
                // Function to get the image index based on the weather icon
                function getImageIndex(icon) {
                    switch (icon) {
                        case "partly-cloudy-day":
                            return 0;
                        case "partly-cloudy-night":
                            return 1;
                        case "rain":
                            return 2;
                        case "clear-day":
                            return 3;
                        case "clear-night":
                            return 4;
                        default:
                            return 0; // Default to partly cloudy day if unknown
                    }
                }
            }).catch((err)=>{
                alert("Unable to fetech the City");
                console.log(err);
            })
        
        