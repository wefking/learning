console.log("Hello world!");
console.log(2+2);
var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + "/index.html", "<h1>HTML is greate</h1>", function(error) {
  if (error) {
    return console.log(error);
  } else {
    return console.log("Congrats");
  }
});


var myPhotoLocation = 'https://s14-eu5.ixquick.com/cgi-bin/serveimage?url=https:%2F%2Fwww.turismotoscana.es%2Fwp-content%2Fuploads%2F2016%2F10%2Fdavid_miguel_angel_florencia.jpg&sp=6e8848ea839787352c7347c8d627a93c';
https.get(myPhotoLocation, function(response) {
  response.pipe(fs.createWriteStream(__dirname + "/myphoto.jpg"));
});
