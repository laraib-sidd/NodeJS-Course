const request = require('request');

const fetchData = (query, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=ed2dfdec63a7e1f209ca33f11a7ec204&query=${encodeURIComponent(query)}`;
    setTimeout(() => {
        request({
            url: url,
            json: true
        }, (err, res) => {
            if (err) {
                callback("Check your internet Connection")
            } else if (res.body.error) {
                callback("Check your input Query");
            } else {
                callback(undefined, {
                    temperature: res['body']['current']['temperature'],
                    weather: res.body.current.weather_descriptions[0],
                    location: res['body']['request']['query']
                })
            }
        })
    }, 0);

}

module.exports = {
    fetchData
};