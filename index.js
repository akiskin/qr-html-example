var qr = require('qr-image');

//var qr_svg = qr.image('I love QR! WTF!');
var qr_encoded = qr.imageSync(process.argv[2]).toString('base64');


var html = `<html><body><img src="data:image/png;base64,${qr_encoded}"></body></html>`;

process.stdout.write(html);
//console.log(html);
 
