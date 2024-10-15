const apiKey = "4e2761279dadadcb9cc196ef89e1f3a1"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

//const apiURL1 = "http://api.weatherapi.com/v1/current.json?key=54b296badb9f4c2ebb4121550242309&q=London"

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
const weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    const response = await fetch(apiURL+city+`&appid=${apiKey}`);
    if (response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        
} else{

    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%"
    document.querySelector(".wind").innerHTML = data.wind.speed+"km/h"

 

        if (data.weather[0].main=="Clouds"){
            weatherIcon.src = "images/clouds.png"
        }
        else if (data.weather[0].main=="Clear"){
            weatherIcon.src = "images/clear.png"
        }
        else if (data.weather[0].main=="Rain"){
            weatherIcon.src = "images/rain.png"
        }
        else if (data.weather[0].main=="Drizzle"){
            weatherIcon.src = "images/drizzle.png"
        }
        else if (data.weather[0].main=="Mist"){
            weatherIcon.src = "images/mist.png"

    }

    document.querySelector('.error').style.display="none";
    document.querySelector('.weather').style.display="block";

}


}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})

