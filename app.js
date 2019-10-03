const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
//const expressHbs = require('express-handlebars');
const errorController = require('./controllers/error');

const app = express();

//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/',defaultLayout : 'main-layout',extname: 'hbs'}));
app.set('view engine', 'ejs');
app.set('views', 'views');

//const adminData = require('./routes/admin');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

// app.use((req,res,next)=>{
//     res.status(404).render('404',{layout: false,
//         title: 'Page Not Found'});
//    // res.status(404).sendfile(path.join(__dirname,"views", "404.html"));
// });  

app.listen(3000);
