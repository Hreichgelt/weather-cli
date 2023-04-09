require('dotenv').config();
const argv = require('yargs').argv;
const APIKEY = `${process.env.APIKEY}`

//default city = La Crosse
// argv.c = city - to call specific city use node index.js -c tokyo
let city = argv.c || 'la crosse';

//api endoint 
let URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`



async function getWeather() {
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data)
    return data;
}
getWeather().then(data => console.log(data));

// clean up the response 
// let weather = JSON.parse(body);
// let message = `It's ${weather.main.temp} degrees in ${weather.name}`;
// console.log(message);



