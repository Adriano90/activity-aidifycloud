(function() {

'use strict';

class ActivityRepository {

	constructor(logger, mapper, ActivityModel) {
		this.logger = logger;
		this.mapper = mapper;
		this.ActivityModel = ActivityModel;
	}
	
	getAllActivities(id) {
		let self = this;
		self.logger.info('Retrieving all activities');
		return new Promise(function (resolve,reject) {
			self.ActivityModel.find({id: id}, function(err, activity) {
				if (err) {
					self.logger.error(err)
					reject(err);
					return;
				}

				resolve(activity.activities.map((elem) => self.mapper.fromDB(elem)));
			});
		});
	}
	
	saveActivity(activity) {
		console.log("Saving activity: %j", activity);
	}

}

module.exports = ActivityRepository;

})();