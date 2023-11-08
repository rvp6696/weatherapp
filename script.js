
window.addEventListener("load", () => {
    pageload()
})

// The pageload function sets initial content in the 'temp-data' element

let pageload = () => {

    let temp = `<p class="filler-data"> Get Weather report for all cities on the go ! </p>`

    document.getElementById("temp-data").innerHTML = temp
}

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'ddf9c69701msh853da657e6ef6a6p1601f9jsn98b92555736e',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
}

let searchData = document.getElementById("searchText")
let searchBtn = document.getElementById("search-btn")
let mainBox = document.getElementById("temp-data")


const getWeather = (cityname) => {

    document.getElementById("cityName").innerText = `for location : ${cityname}`
    let temp = ""

    // Fetches weather data from the API and updates the HTML content with the results
    fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=` + cityname, options)
        .then(response => response.json())
        .then((details) => {
            const sunrisetime = new Date(details.sunrise * 1000)
            console.log(sunrisetime)

            const sunsettime = new Date(details.sunset * 1000)
            console.log(sunrisetime)

            temp += `<div class="all-weather-data">
                        <p> <i class="bi bi-thermometer"></i> Temperature is <b> ${details.temp}<span>&#8451;</span></b>  </p>
                        <p> <i class="bi bi-thermometer-snow"></i> Minimum Temperature is <b> ${details.min_temp}<span>&#8451;</span> </b> </p>
                        <p> <i class="bi bi-thermometer-sun"></i> Maximum Temperature is <b>${details.max_temp}<span>&#8451;</span></b> </p>
                        <p> <i class="bi bi-droplet-half"></i> Humidity is <b>${details.humidity}<span>%</span></b> </p>
                        <p> <i class="bi bi-person-walking"></i> Feels like <b>${details.feels_like}<span>&#8451;</span></b> </p>
                        <p> <i class="bi bi-sunrise-fill"></i> Sunrise Time : <b>${sunrisetime}</b> </p>
                        <p> <i class="bi bi-moon-stars-fill"></i> Sunset Time : <b> ${sunsettime} </b> </p>
                        <p> <i class="bi bi-tornado"></i> Wind Degree is <b>${details.wind_degrees}</b> </p>
                        <p> <i class="bi bi-wind"></i> Wind Speed is <b>${details.wind_speed} <span>km/hr</span></b> </p>
                    </div>`
            mainBox.innerHTML = temp
            document.getElementById("searchText").value=""
        })
}

// Event listener for the search button to trigger the getWeather function
searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let cityname = searchData.value
    getWeather(cityname)
})


let getdata = (city) => {
    getWeather(city)
}


