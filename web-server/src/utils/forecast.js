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
                    temperature: body.current.temperature,
                    weather: body.current.weather_descriptions[0],
                    location: body.request.query,
                    precipitation: body.current.precip
                })
            }
        })
    }, 0);
}

module.exports = {
    fetchData
};