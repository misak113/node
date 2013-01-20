
var mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.215/misak113');
var db = mongoose.connection;

db.on('open', function () {
	start();
});

var start = function () {
	Offer.findOne({id: 113}, function (e, offer) {
		var data = {id: 113, name: 'Lahodná rajčátka', price: 4.65};
		if (!offer) {
			console.error(e);
			offer = new Offer(data);
		}

		offer.name = 'Lahodná rajčátka';

		offer.save(function (e, offer) {
			console.error(e);
			console.log(offer);
		});
	});

};

var offerSchema = mongoose.Schema({id: Number, name: String, price: Number});
var Offer = mongoose.model('Offer', offerSchema);






/*
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

*/
