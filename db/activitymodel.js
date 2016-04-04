(function() {

'use strict';

let mongoose = require('mongoose');

let activitySchema = mongoose.Schema({
    id: Number,
	type: String,
	action: String,
	repo: String,
	user: String,
	points: Number,
	createdAt: Date
});

activitySchema.index({ user: 1 })

let activityModel = mongoose.model('Activity', activitySchema);

module.exports = activityModel;

})();