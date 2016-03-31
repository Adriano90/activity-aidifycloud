(function() {

'use strict';

class SaveActivity {

	constructor(activityRepository) {
		this.activityRepository = activityRepository;
	}
	
	execute(activity) {
		this.activityRepository
			.saveActivity(activity);
	}
}

module.exports = SaveActivity;

})();