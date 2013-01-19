var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello from <a href="http://appfog.com">AppFog.com</a>');
}).listen(process.env.VMC_APP_PORT || 1337, null);


var express = require('express');

var mongo = function () {
	if(process.env.VCAP_SERVICES){
	    var env = JSON.parse(process.env.VCAP_SERVICES);
	    var mongo = env['mongodb-1.8'][0]['credentials'];
	    return {
	    	env: env, mongo: mongo
	    };
	}
	return 'NO';
}


// Listening
app = express.createServer();
app.configure(function () {
	app.use(app.router);
});
app.get('/mongo', function (req, res) {
	res.send(mongo());
});

var port = 8087;
app.listen(port);
console.log('Listening on port ' + port);

