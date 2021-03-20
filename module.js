const mongoose = require('mongoose');
const slugify =  require('slugify');

const CompanySchema = new mongoose.Schema({
    name:{
        type: String,
        require: [true,'A tour must have a name'],
        unique: true,
        trim:true
    },
    contact:{
        type: Number,
        require: [true, 'A tour must have a duration']
    },
    rating: {
        type: Number,
        default: 4.5
    },
    description:{
        type: String,
        require: [true, 'A company must have a description'],
        trim:true
    },
    imageCover:{
        type:String,
        require:[true, 'A tour must have a cover image']
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        select: false
    },
    address:{
        type: String,
        trim: true,
        default: 'In house'
    },
    websiteLink:{
        type:String,
        trim:true
    },
    domainType:{
        type: String,
        trim: true,
        require:['A company domain must be specified']
    }
})


const Company = mongoose.model('Company', CompanySchema);

module.exports = Company;