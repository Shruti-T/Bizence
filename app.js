const express = require('express');
const morgan = require('morgan');
const router = require('./route/router');
 
const app = express();

//1) Middle-wares
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use(express.json());    
app.use(express.static(`${__dirname}/public`));


app.use((req,res,next) =>{
    console.log('Hello from the Middleware!!');
    next();
});

app.use((req,res,next) =>{
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/company', router);
    
module.exports = app;

