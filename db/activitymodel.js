(function() {

'use strict';

let mongoose = require('mongoose');

let activitySchema = mongoose.Schema({
    id: Number,
	activities: [
		{
			createdAt: Date,
			type: String,
			action: String,
			repo: String
		}
	]
});

activitySchema.index({ id: 1 }, { unique: true })

let activityModel = mongoose.model('Activity', activitySchema);

module.exports = activityModel;

})();