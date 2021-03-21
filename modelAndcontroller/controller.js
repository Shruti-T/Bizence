const { QueryCursor } = require('mongoose');
const Company = require('./model');
const APIFeatures = require('./../apiFeature/apiFeatures')


exports.getAllCompanies = async (req,res) =>{
    try{     
        console.log('dcdve',req.query);

        //EXECUTE THE QUERY
        const features = new APIFeatures(Company.find(), req.query).filter().sort().limitFields().paginate();
        const company = await features.query;
        //query.sort().select().fields().limit().skip()
        //SEND response
        res.status(200).json({
            status: 'success',
            result: company.length,
            data:{
            company
            }
        });
    } catch (err){
        res.status(404).json({
            status:'fail',
            message: err
        });
    }
};


