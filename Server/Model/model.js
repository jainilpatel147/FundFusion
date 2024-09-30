var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/FundFusion');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePicture: {
        type: String,
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    },
},{timestamps:true}, {collection:'Users'});

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
   
},{timestamps:true},{collection:'Campaigns'});

const contributionSchema = new mongoose.Schema({
    campaign: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campaign',
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
},{timestamps:true},{collection:'Contributions'});


const Contribution = mongoose.model('Contribution', contributionSchema);
const Campaign = mongoose.model('Campaign', campaignSchema);
const User = mongoose.model('User', userSchema);


module.exports= {Contribution,Campaign,User};