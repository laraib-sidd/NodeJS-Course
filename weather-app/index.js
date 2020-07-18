const forecast = require('./forecast');

const place = process.argv[2]

if (!place) {
    console.log("Please pass a location to get it's weather updates");
} else {
    forecast.fetchData(place, (err, {
        location,
        temperature,
        weather
    } = {}) => {
        if (err) {
            return console.log(err);
        }
        console.log(location);
        console.log(`The Temerarture is ${temperature}, And the weather is ${weather}`);
    })

}