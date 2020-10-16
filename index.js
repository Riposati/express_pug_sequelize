const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan'); // biblioteca de logs dentro do terminal
const methodOverride = require('method-override');

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'src/view'));

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended:false })); // parse do formulario para json
app.use(bodyParser.json());
app.use(methodOverride('_method'));

require('./src/model/index');
require('./src/index')(app);

app.listen(3000,function(){

    console.log('Express has been ignite');
});