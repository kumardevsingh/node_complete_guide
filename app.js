const http = require('http');
//const routes = require('./routes');

const express =  require('express');

const app = express();

//const server = http.createServer(routes);

app.use((req,res,next) =>{
    console.log('in middleware');
    res.send(`<h1> From express</h1>`)
    next();
})

app.use((req,res,next) =>{
    console.log('in another  middleware');
   // res.send(`<h1> From express -2</h1>`)
    //next();
})


//const server = http.createServer(app);
//server.listen(3000);
app.listen(3000);