// require mongoose
const mongoose = require("mongoose");

// create schema

const reportSchema = mongoose.Schema({
    status:{
        type:String,
        required:true,
        enum:['Negative','Travelled-Quarantine','Symptoms-Quarantine','Positive-Admit']
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required:true,
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required:true,
    }
},{
    timestamps: true
})


const Report = mongoose.model("Report", reportSchema);

module.exports = Report;