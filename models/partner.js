const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    image: {
        type: String,
        required: true
    },
    featured: {
        type: Boolean,
        required: false,
    },
    description: {
        type: String,
        required: true
    }
}, {
    //automatically add update at time and created at time
    timestamps: true,
});

//automatically look for the lowercase first argument
const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;