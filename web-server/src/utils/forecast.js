const request = require('request');

const fetchData = (query, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ed2dfdec63a7e1f209ca33f11a7ec204&query=${encodeURIComponent(query)}`;
    setTimeout(() => {
        request({
            url,
            json: true
        }, (err, {
            body
        }) => {
            if (err) {
                callback("Check your internet Connection", undefined)
            } else if (body.error) {
                callback("Check your input Query", undefined);
            } else {
                callback(undefined, {
                    forecast: `The temperature at your location is ${body.current.temperature},
                    And the weather seems to be ${body.current.weather_description[0]}.There are ${body.current.precip}% chances of rain`,
                    location: body.request.query,
                })
            }
        })
    }, 0);
}

module.exports = {
    fetchData
};