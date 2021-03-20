const company = require('./model');
const APIFeatures = require('./../util/apiFeatures');

exports.getAllCompany = async (req,res) =>{
    try{     
        console.log(req.query);

        //EXECUTE THE QUERY
        const features = new APIFeatures(Tour.find(), req.query).filter().sort().limitFields().paginate();
        const tours = await features.query;
        //query.sort().select().fields().limit().skip()
        //SEND response
        res.status(200).json({
            status: 'success',
            result: tours.length,
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

