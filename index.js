require("dotenv").config();
const argv = require("yargs").argv;
const APIKEY = `${process.env.APIKEY}`;
// console.log(argv);

// argv.c = city - to call specific city use node index.js -c tokyo
// const city = argv.c || "winona";
// argv.zipcode = zipcode --- to call specific zip use node index.js -z xxxxx
// if outside the US - use country code - call index.js -z xxxxx -n XX
var zipcode = argv.z || "80031";
const nation = argv.n || "US"

//api endoint

const URL = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},${nation}&units=imperial&appid=${APIKEY}`; //zipcode 

async function getCity() {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
};
// passing a function when getweather function is complete - .then(........ is a callback function) - need to format data here.
getCity().then((data) => {console.log(data)

  const sunriseDate = new Date(0)
  sunriseDate.setUTCSeconds(data.sys.sunrise)

const sunsetDate = new Date(0);
sunsetDate.setUTCSeconds(data.sys.sunset);

console.log(`The weather in ${data.name} today is: ` + data.weather[0].main);
console.log(`The temp in ${data.name} is currently: ` + data.main.temp);
console.log(`${data.name}'s low for today is: ` + data.main.temp_min);
console.log(`${data.name}'s high for today is: ` + data.main.temp_max);
console.log(`${data.name}'s pressure at: ` + data.main.pressure);
console.log(`${data.name}'s humidity is: ` + data.main.humidity);
console.log(`${data.name}'s sunrise is at: ` + sunriseDate.toLocaleString());
console.log(`${data.name}'s sunset is at: ` + sunsetDate.toLocaleString());

});