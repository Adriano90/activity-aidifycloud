(function() {

'use strict';

const restify = require('restify');
const config = require('../package.json');
const Response = require('./response');

class Server {
	
	constructor(logger, getActivities) {
		let api = restify.createServer({
			name: config.name,
			version: config.version
		});
		api.use(restify.acceptParser(api.acceptable));
		api.use(restify.queryParser());
		api.use(restify.bodyParser());
		
		api.get('/',function (req,res) {
		  let response = new Response(res);
		  response.pong();
		});
	
		api.get('/activity', function(req, res) {
			if (logger) {
				logger.info('request GET : /user');
			}
			
			let params = {};
			if (req.query && req.query.user) {
				params['user'] = req.query.user;
			}
			
			getActivities.execute(params, new Response(res, logger));
		});
		
		api.listen(process.env.PORT || 5003,function () {
			logger.config(config.name + ' up and ready');
		});
	}
}

module.exports = Server;

})();