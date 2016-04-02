(function() {

'use strict';

let mongoose = require('mongoose');

let activitySchema = mongoose.Schema({
    id: Number,
	createdAt: Date,
	type: String,
	action: String,
	repo: String,
	user: String,
	points: Number
});

activitySchema.index({ user: 1 })

let activityModel = mongoose.model('Activity', activitySchema);

module.exports = activityModel;

})();