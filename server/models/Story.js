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
	user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

storySchema.set('timestamps', true);

const Story = mongoose.model('Story', storySchema);

module.exports = { Story, storySchema };
