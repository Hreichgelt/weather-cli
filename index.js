const fetch = require('node-fetch');
const APIKEY = require('dotenv').config()


const URL = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={APIKEY}';

async function logWeatherJsonData(){
    const res = await fetch(URL);
    const jsonData = await res.json();
    console.log(jsonData);
}