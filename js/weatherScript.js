// don't know js but it's basically the same as java amrite?
function displayWeather() {
    var weatherStates = ["Sunny", "Cloudy", "Clear", "Monsoon", "Light Rain", "Literal Volcano Eruption", "Cloudy with a Chance of Meatballs"]
    document.getElementById("temp").innerHTML = Math.round(Math.random()*60 + 32);
    document.getElementById("humid").innerHTML = Math.round(Math.random()*100) + "%";
    document.getElementById("weatherState").innerHTML = weatherStates[Math.round(Math.random()*weatherStates.length-1)];
    
}