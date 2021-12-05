const express = require('express');
const app = express();
const path = require('path');
const port = 3000;
const methodOveride = require('method-override');
const homeRouter = require('./routes/home');


//Server configs
app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use(methodOveride('_method'));

//Routes
app.use(homeRouter);

//Errors Route Response
app.use((req, res, next) => {
    res.status(404).render('not-found');
})


//Server Listen
app.listen(port, () => console.log("The server is running on port: " + port + " 🚀"));
