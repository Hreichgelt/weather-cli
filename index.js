const fetch = require('node-fetch');


const URL = 'http://api.openweathermap.org/geo/1.0/reverse?lat={lat}&lon={lon}&limit={limit}&appid={API key}'
fetch(URL, function (err, response, body) {
    if(err){
        console.log('error', error);
    } else {
        console.log('body', body);
    }
});