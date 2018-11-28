const request = require('request');

var geocodeAddress = (inputAddress, callback) => {
    var encodedAddress = encodeURIComponent(inputAddress);

    request({
        // url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301+lombard+st+philadelphia&key=AIzaSyBQl3RD-POUFT8ZaFG3r6QV6-Azf218adY',
        // url: 'http://www.mapquestapi.com/geocoding/v1/address?key=wWN1AQvx4Sgw3odZcXBbJsFor75cZJle&location=1301%20lombard%20street%20philadelphia',
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=wWN1AQvx4Sgw3odZcXBbJsFor75cZJle&location=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        geocodeQualityCode = body.results[0].locations[0].geocodeQualityCode
        console.log(`geocodeQualityCode: ${geocodeQualityCode}`);
        if (error) {
            callback('Unable to connect to Mapquest servers.');
            // console.log('Unable to connect to Mapquest servers.');
        } else if (/.*Z[2-4].*/.test(geocodeQualityCode)) {
            callback('Unable to find that address.');
            // console.log('Unable to find that address.');
        } else {
            // console.log(body.results[0].locations[0].linkId)
            callback(undefined, {
                address: `${body.results[0].locations[0].street}, `
                +`${body.results[0].locations[0].adminArea5}, `
                +`${body.results[0].locations[0].adminArea3}, `
                +`${body.results[0].locations[0].postalCode}, `
                  +`${body.results[0].locations[0].adminArea1}`,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
            // console.log(`Address: ${body.results[0].providedLocation.location}`);
            // console.log('Address: %s, %s, %s %s, %s', `${body.results[0].locations[0].street}`,
            // `${body.results[0].locations[0].adminArea5}`,
            // `${body.results[0].locations[0].adminArea3}`,
            // `${body.results[0].locations[0].postalCode}`,
            // `${body.results[0].locations[0].adminArea1}`);
            // console.log(`Latittude: ${body.results[0].locations[0].latLng.lat}`);
            // console.log(`Longitute: ${body.results[0].locations[0].latLng.lng}`);
            // console.log(JSON.stringify(error, undefined, 2));
            // console.log(JSON.stringify(response, undefined, 2));
            // console.log(JSON.stringify(body, undefined, 2));
        };
    });
}

module.exports.geocodeAddress = geocodeAddress;