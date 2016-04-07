(function() {

'use strict';

class ActivityRepository {

	constructor(logger, mapper, ActivityModel) {
		this.logger = logger;
		this.mapper = mapper;
		this.ActivityModel = ActivityModel;
	}
	
	getActivities(params) {
		let self = this;
		self.logger.info('Retrieving all activities');
		return new Promise(function (resolve,reject) {
			self.ActivityModel.find(params)
				.sort({'createdAt': -1})
				.limit(25)
				.exec(function(err, activities) {
					if (err) {
						self.logger.error(err)
						return reject(err);
					}
					resolve(activities.map((elem) => self.mapper.fromDB(elem)));
				});
		});
	}
	
	saveActivity(activity) {
		let self = this;
		self.ActivityModel.create(
			activity, 
			function(err, res) {
				if (err) {
					return self.logger.error(err);
				}
				
				self.logger.info("Saved activity" + JSON.stringify(res));
			});
	}

}

module.exports = ActivityRepository;

})();