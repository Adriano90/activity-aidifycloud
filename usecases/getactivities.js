(function() {

'use strict';

class GetAllActivities {
	constructor(activityRepository) {
		this.activityRepository = activityRepository;
	}
	
	execute(params, res) {
		this.activityRepository
			.getActivities(params)
			.then(function(activities) {
				res.ok(activities);
			})
			.catch(function(err) {
				console.log("GetAllActivitiesUseCase error: " + err);
				res.ko(err);
			});
	}
}

module.exports = GetAllActivities;

})();