require("dotenv").config();
const argv = require("yargs").argv;
const APIKEY = `${process.env.APIKEY}`;
console.log(argv);


//default city = La Crosse
// argv.c = city - to call specific city use node index.js -c tokyo
// const location = argv.c || "winona";
// argv.zipcode = zipcode --- to call specific zip use node index.js --xxxxx
var zipcode = argv.z || "80031";

//api endoint
// const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`; //city

const URL = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&units=imperial&appid=${APIKEY}`; //zipcode 

async function getWeather() {
  let response = await fetch(URL);
  let data = await response.json();
  return data;
}
// passing a function when getweather function is complete - .then(........ is a callback function) - need to format data here.
getWeather().then((data) => {

//   const sunriseDate = new Date(0)
//   sunriseDate.setUTCSeconds(data.sys.sunrise)

// const sunsetDate = new Date(0);
// sunsetDate.setUTCSeconds(data.sys.sunset);

  console.log(data);
//   console.log("The weather in La Crosse today is: " + data.weather[0].main);
//   console.log("The temp in lacrosse is currently: " + data.main.temp);
//   console.log("the low for today is: " + data.main.temp_min);
//   console.log("The high for today is: " + data.main.temp_max);
//   console.log("pressure at: " + data.main.pressure);
//   console.log("humidity is: " + data.main.humidity);
//   console.log("sunrise is at: " + sunriseDate.toLocaleString());
//   console.log("sunset is at: " + sunsetDate.toLocaleString());
});

// how can I clean up the response?

// the weather in lacrosse today is: ......
// The temp in lacrosse is currently
// the low for today is
// the high for today is
// pressure at
// humidity is:
