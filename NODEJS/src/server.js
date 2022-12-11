import express  from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
import cors from 'cors';

require('dotenv').config();

let app = express();
app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin','http://localhost:3000  ');

    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');

    res.setHeader('Access-Control-Allow-Credentials',true);

    next();

});

//config app

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json({limit:'500mb'}));
app.use(bodyParser.urlencoded({limit:'500mb',extended : true}));

viewEngine(app);
initWebRoutes(app);

connectDB();

let port = process.env.PORT || 6969

// app.use(function(req, res, next){
//     res.setHeader('Access-Control-Allow-Origin',process.env.REACT_URL);

//     res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');

//     res.setHeader('Access-Control-Allow-Credentials',true);

//     next();

// });
app.listen(port,()=>{
    console.log("back end nodejs running..." + port);
})
