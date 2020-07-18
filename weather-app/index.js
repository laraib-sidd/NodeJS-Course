const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=ed2dfdec63a7e1f209ca33f11a7ec204&query=';

request({
    url: url,
    json: true
}, (err, res) => {
    if (err) {
        throw (err)
    }else if(res.body.error){
        console.log(res.body.error.info);
    } 
    else {
        console.log(`The temperature is ${res['body']['current']['temperature']} currently. It is ${res.body.current.weather_descriptions}`)
    }
})