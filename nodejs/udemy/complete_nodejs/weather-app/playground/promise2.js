const request = require('request');

var geocodeAddress = (inputAddress) => {
    var encodedAddress = encodeURIComponent(inputAddress);
    return new Promise((resolve, reject) => {
        request({
            // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyBQl3RD-POUFT8ZaFG3r6QV6-Azf218adY',
            // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=wWN1AQvx4Sgw3odZcXBbJsFor75cZJle&location=1301%20lombard%20street%20philadelphia',
            url: `http://www.mapquestapi.com/geocoding/v1/address?key=wWN1AQvx4Sgw3odZcXBbJsFor75cZJle&location=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
            geocodeQualityCode = "none";
            // geocodeQualityCode = body.results[0].locations[0].geocodeQualityCode
            // console.log(`geocodeQualityCode: ${geocodeQualityCode}`);
            //console.log(response)
            if (error) {
                reject('Unable to connect to Mapquest servers.');
                // console.log('Unable to connect to Mapquest servers.');
            } else if (/.*Z[2-4].*/.test(geocodeQualityCode)) {
                reject('Unable to find that address.');
                // console.log('Unable to find that address.');
            } else {
                //console.log(body)
                resolve({
                    address: `${body.results[0].locations[0].street}, `
                    +`${body.results[0].locations[0].adminArea5}, `
                    +`${body.results[0].locations[0].adminArea3}, `
                    +`${body.results[0].locations[0].postalCode}, `
                      +`${body.results[0].locations[0].adminArea1}`,
                    latitude: body.results[0].locations[0].latLng.lat,
                    longitude: body.results[0].locations[0].latLng.lng
                });
 
            };
        });
    });
           // console.log(`Address: ${body.results[0].providedLocation.location}`);

};

geocodeAddress('Ulm').then((location) => {
    console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
    console.log(errorMessage);
});