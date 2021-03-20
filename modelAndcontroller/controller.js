const company = require('../modelAndcontroller/model');
const APIFeatures = require('../apiFeature/apiFeatures');

exports.getAllCompany = async (req,res) =>{
    try{     
        console.log(req.query);

        //EXECUTE THE QUERY
        const features = new APIFeatures(company.find(), req.query).filter().sort().limitFields().paginate();
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

