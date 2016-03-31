(function() {

'use strict';

class Activity {
	
	constructor(type, action, repo, createdAt) {
		this.type = type;
		this.action = action;
		this.repo = repo;
		this.createdAt = createdAt;
	}
}

module.exports = Activity;

})();