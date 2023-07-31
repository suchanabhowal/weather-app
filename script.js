const apikey = "73291ca7bc6ae7d56f1620868a5b99fa";
// const apiurl="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");


async function checkweather(city) {
    console.log("updating");
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {
        document.querySelector(".city").innerHTML = data.name; //it will slect the city element ,innerHTML will update data stored in city.
        document.querySelector(".temp").innerHTML = data.main.temp + '°C';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'km/hour';

        if (data.weather[0].main == "Clouds") {
            weathericon.src = "mist.png";
            // <p img src="humidity.png"></p>
            // break;
        }
        if (data.weather[0].main == "Clear") {
            console.log("inside clear");
            weathericon.src = "clear.png";
        }
        if (data.weather[0].main == "Rain") {
            weathericon.src = "rain.png";
        }
        if (data.weather[0].main == "Drizzle") {
            weathericon.src = "drizzle.png";
        }
        if (data.weather[0].main == "Mist") {
            weathericon.src = "mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


// switch (data.weather[0].main) {
//     case "Clouds":
//         weathericon.src = "mist.png";
//         break;
//     case "Clear":
//         weathericon.src = "clear.png";
//         break;
//     case "Haze":
//         weathericon.src = "rain.png";
//         break;
//     case "Mist":
//         weathericon.src = "mist.png";
//         break;
//     case "Snow":
//         weathericon.src = "snow.png";
//         break;

// }
// }

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);  //this will give the city name to ckeckweather(),
});