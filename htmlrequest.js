var https = require('https');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };


function getAndPrintHTML () {

  var buffer = '';


  https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    buffer += data
  });

  response.on('end', function() {
    console.log(buffer);
  });
});

}


function printHTML (html) {
  console.log(html)''
}


getHTML(requestOptions, printHTML);
