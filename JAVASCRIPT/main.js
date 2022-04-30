let submit = document.querySelector('#submit-city-name');
let cityName = undefined;

function getCityName() {
  cityName = document.querySelector('#city-name').value;
}

submit.onclick = function(event){
  event.preventDefault();
  getCityName();
  weatherBalloon(cityName)
}

function weatherBalloon(name) {
  if (name != undefined) {
    var key = 'dddac64fe2984fb293873c53e14c4736';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data) //Call drawWeather;
    })
    .catch(function() {
      // catch any errors
    });
  }
}

function drawWeather( d ) {
  var celcius = Math.round(parseFloat(d.main.temp)-273.15);
  var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
  
  document.getElementById('description').value = d.weather[0].description;
  document.getElementById('temp').value = celcius + ' C°';
  document.getElementById('location').value = d.name;
}
