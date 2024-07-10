const express = require('express');
const app = express();
const {PORT}=require('./config/serverConfig');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/index.js');

const setUPAndStart =()=>{
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',apiRoutes);
    
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    })
}

setUPAndStart();