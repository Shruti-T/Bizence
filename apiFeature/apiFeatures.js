
class APIFeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    };
    filter()
    {
        const queryObj = {...this.queryString};
        const excludedFields = ['page','sort','limit','fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        //1B) advanced filtering
            //{difficulty:'easy',duration:{$gte:5} } ....what we want
            //{difficulty:'easy',duration:{gte:5} }...what we get from query in url.
            //gte, gt, lte, lt  basically we want only these words to find or operator...
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);
        console.log(JSON.parse(queryStr));
       
        this.query = this.query.find(JSON.parse(queryStr));
        console.log(this.query);
        return this;
    };
    sort(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ');
            console.log(sortBy);
            this.query = this.query.sort(sortBy);
            //sort by (price, ratingsAverage)
        }else{
            this.query = this.query.sort('-createdAt');
        }
        return this;
    };
    limitFields(){
        if(this.queryString.fields){
            const fields = this.queryString.fields.split(',').join(' ');
            this.query = this.query.select(fields);
        }else{
            this.query = this.query.select('-__v');
        }
        return this;    
    };
    paginate()
    {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit *1 || 100;
        const skip = (page - 1) * limit;  

        this.query = this.query.skip(skip).limit(limit);
        return this;
    };
}

module.exports = APIFeatures;