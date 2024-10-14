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
   
