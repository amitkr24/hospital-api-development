const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    //name of the patient
    name:{
        type:String,
        required:true
    },

    //phone number of the patient, it must be a 10 digit number
    phone: {
        type: Number,
        unique: true,
        required: true,
        maxlength: 10
    },

    //gender of the patient
    reports:[{
        type:  mongoose.Schema.Types.ObjectId,
        ref: "Report"
    }]
},{
    timestamps: true
});

const Patient = mongoose.model('Patient', PatientSchema); //modelling the schema
module.exports = Patient;