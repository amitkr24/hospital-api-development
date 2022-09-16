const jwt     = require('jsonwebtoken'); //used to decode jwt token
const Patient = require('../model/patient'); //Patient model
const Doctor  = require('../model/doctor'); //Doctor model
const Report  = require('../model/reports'); //Doctor model

//fetchall reports of a patient 
module.exports.filterReport = async function(req, res){
    
    try{
        let report=await Report.find({ status:req.params.status }).sort("createdAt").populate('doctor').populate('patient');
        
        return res.status(200).json({
            data:{
                report
            },
            message:'All reports of the patient',
          //details:report
        })
      }
      catch(err){
          return res.status(500).json({
          message:'Internal Server Error'
        })
      }
};