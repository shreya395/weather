const apikey="72c9ba1d1e85cac8674979a48a599de2";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // open weather map api key
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
async function checkWeather(city){
    const response=await fetch(apiUrl +city+ `&appid=${apikey}`);
    var data=await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
