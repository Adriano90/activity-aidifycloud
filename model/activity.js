(function() {

'use strict';

class Activity {
	
	constructor(type, action, repo, createdAt, points) {
		this.type = type;
		this.action = action;
		this.repo = repo;
		this.createdAt = createdAt;
		this.points = points;
	}
}

module.exports = Activity;

})();