const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser')
const sumRouter = require('./routers/sum');

const app = express();

//use ejs layout
app.use(expressLayouts);

// use body parser
app.use(bodyParser.urlencoded({ extended: false }));

// set the view engine to ejs
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.use('/sum', sumRouter);

const port = process.env.PORT || 3000;
console.log(`${port} is the magic port `);
app.listen(port);