const jwt     = require('jsonwebtoken'); //used to decode jwt token
const Patient = require('../model/patient'); //Patient model
const Doctor  = require('../model/doctor'); //Doctor model
const Report  = require('../model/reports'); //Doctor model

//status added
const status_arr = ["Negative", "Travelled-Quarantine", "Symptoms-Quarantine", "Positive-Admit"];

//Register a patient using name,phone and password
module.exports.register = async function(req, res){

    if(req.body.phone==undefined || req.body.name==undefined){
        return res.status(206).json({
            message: 'Incomplete data provided'
        });
    }

    let phone = req.body.phone;
    //Checking if patient is already registered in db
    let patientExists = await Patient.findOne({phone: phone});
    if(patientExists){
        return res.status(405).json({
            message: 'Patient already Registered DB',
            data:{
                patient:patientExists
            }
        })
    }

    try{
        //IF Patient is new Register new patient
        let createdPatient = await Patient.create(req.body);
        if(createdPatient){
            return res.status(200).json({
                message: 'Patient Successfully Registered',
                data: {
                    patient:createdPatient,
                    
                }
            });
        }
        else{
            return res.status(500).json({
                message: ' error !!!'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: 'Internal Server Error'
        });
    }
}

//report create
module.exports.reportCreate = async function(req,res){
    let patientId = req.params.id;
    let docId     = req.body.doctor;

    if(patientId==undefined || docId==undefined){
        return res.status(206).json({
            message: 'Incomplete data provided'
        });
    }
    //get/mapping status of the patient from config folder
    let st = req.body.status;
    if(status_arr.includes(st)){
        req.body.status = st;
    }else{
        return res.status(500).json({
            message: 'Invalid Status.Please choose valid status',
                Status:{
                    0:"Negative",
                    1:"Travelled-Quarantine",
                    2:"Symptoms-Quarantine",
                    3:"Positive-Admit"
                }
        });
    }
    
    try{
        let patient = await Patient.findById(req.params.id);
        let doctor  = await Doctor.findById(req.body.doctor);
        //If the patient and doctor ids both exist only
        //then report created
        if(patient && doctor){
            req.body.patient = patientId;
            let report = await Report.create(req.body);
            console.log(report);
            if(report){
                //pushing the new report in the patients report array
                await patient.reports.push(report);
                await patient.save();
            }
           
            return res.status(200).json({
                message: 'Report successfully Created',
                data:{
                    report:{
                        patient: patient.name,
                        status: report.status,
                        doctor: doctor.name,
                        date: report.createdAt
                    }
                }
            })
        }
        else{
            return res.status(401).json({
                message: 'Patient/Doctor is not Registered'
            });
        }
    }
    catch(err){
        return res.status(500).json({
            message: 'Internal Server Error !'
        });
    }
}

//fetchall reports of a patient 
module.exports.reportList = async function(req, res){
    try{
        let report=await Report.find({ patient:req.params.id }).sort("createdAt").populate('doctor').populate('patient');
        
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
