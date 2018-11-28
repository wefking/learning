const yargs = require('yargs');
const axios = require('axios');

const argv = yargs
  .options({
      a: {
          demand: true,
          alias: 'address',
          describe: 'Address to fetch weather for',
          string: true
      }
  })
  .help()
  .alias('help', 'h')
  .argv;

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl= `http://www.mapquestapi.com/geocoding/v1/address?key=wWN1AQvx4Sgw3odZcXBbJsFor75cZJle&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
//   console.log(response.data);
  var latitude = response.data.results[0].locations[0].latLng.lat;
  var longitude = response.data.results[0].locations[0].latLng.lng;
  var weatherUrl = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=73d912d1eeeeb07955f103460437e5f3&units=metric`;
//   console.log(weatherUrl);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.main.temp;
//   console.log(response.data);
  console.log('Temperature is: ', temperature);
}).catch((e) => {
    if (e.code === 'ENOTFOUND') {
        console.log('Unable to connecto to API servers.');
    } else {
        console.log('error!!');
        console.log(e.message);
    };
});

