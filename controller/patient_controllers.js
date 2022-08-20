const jwt     = require('jsonwebtoken'); //used to decode jwt token
const Patient = require('../model/patient'); //Doctor model

module.exports.register = async function(req,res){
    console.log(req.body);
    if(req.body.phone==undefined || req.body.name==undefined || req.body.gender==undefined){
        return res.json(402, {
            message: 'phone,Name & Gender can not be blank'
        });
    }
    try{
        let patient = await Patient.findOne({ phone: req.body.phone}); //checking if patient already exists
        console.log(patient);
        if (patient){
            //if doctor exists
            return res.json(409, {
                message: 'Patient already exists!'
            });
        }else{
            console.log('case1');
            doctor = await Doctor.create(req.body);
            return res.json(201,{
                message:'Patient created successfully'
            })
        }
    }catch{
         //catching errors
         console.log('Internal server error!!');
        
         return res.json(500, {
             message: 'Internal Server Error'
         })
    }
}