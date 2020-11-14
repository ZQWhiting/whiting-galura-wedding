const mongoose = require('mongoose');

const { Schema } = mongoose;

const storySchema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true,
	},
	body: {
		type: String,
		required: true,
		maxlength: 100000,
	},
	username: {
		type: String,
		required: true,
	},
	relationship: {
		type: String,
	},
});

const Story = mongoose.model('Story', storySchema);

module.exports = { Story, storySchema };
