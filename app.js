const express = require('express');
//const { nextTick } = require('node:process');
const morgan = require('morgan');
const app = express();
const route = require('./route/router');

console.log(process.env.NODE_ENV);
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.get('/', (req,res)=>{
    res.status(200).send('helloooo');
});

app.use('/api/v1/company', route);

module.exports = app;