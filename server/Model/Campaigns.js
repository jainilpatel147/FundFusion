var mongoose=require('mongoose');
const campaign = require('../Controller/routes/campaign_routes');

const campaignSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    goalAmount: {
        type: Number,
        required: true,
    },
    currentAmount: {
        type: Number,
        default: 0,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    deadline: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'completed', 'failed'],
        default: 'active',
    },
   
},{collection:'Campaigns'});

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign;