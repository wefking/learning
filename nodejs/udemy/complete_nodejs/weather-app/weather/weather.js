const request = require('request');

var getWeather = (latitude, longitude, callback) => {
    request({
        url: `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=73d912d1eeeeb07955f103460437e5f3&units=metric`,
        json: true
    }, (error, response, body) => {
        // console.log(`http://api.opnweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=73d912d1eeeeb07955f103460437e5f3&units=metric`);
        if (!error && response.statusCode === 200) {
           temp = body.main.temp;
           callback(undefined, `Temperature: ${temp}`);
        } else {
            callback('Unable to fetch weather.')
            // console.log(JSON.stringify(error, undefined, 2));
            if (typeof response !== "undefined") {
               callback(`Error ${response.statusCode}, message: ${body.message}`);
            };
        }
        // console.log(JSON.stringify(body, undefined, 2));
    });
};

module.exports.getWeather = getWeather;

