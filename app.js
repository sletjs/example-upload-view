'use strict';

const Slet = require('slet');
const app = new Slet({
    root: __dirname,
    debug: true,
    upload: { dest: './uploads/'}
});

app.defineController(require('slet-viewcontroller'))
app.defineController(require('slet-uploadviewcontroller'))

app.router('/', require('./viewctrl') )  

app.router('/upload', require('./uploadctrl') )  

app.start(3000) 