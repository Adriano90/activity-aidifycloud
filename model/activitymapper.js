(function() {

'use strict';

const Activity = require('./activity');

module.exports.fromJson = function(json) {
	return new Activity(json['type'], json['action'], json['repo'],
		json['createdAt'], json['points'], json['affectedStats']);
}

module.exports.fromDB = function(activity) {
	return new Activity(activity['type'], activity['action'], activity['repo'],
		activity['createdAt'], activity['points'], activity['affectedStats']);
}

})();