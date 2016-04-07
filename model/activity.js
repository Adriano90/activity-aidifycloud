(function() {

'use strict';

class Activity {
	
	constructor(type, action, repo, createdAt, points, affectedStats) {
		this.type = type;
		this.action = action;
		this.repo = repo;
		this.createdAt = createdAt;
		this.points = points;
		this.affectedStats = affectedStats;
	}
}

module.exports = Activity;

})();