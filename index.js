const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const app = express();
const massive = require('massive');
const controller = require('./controller.js');


app.use( bodyParser.json() );
app.use( cors() );

massive(process.env.CONNECTION_STRING).then(dbInstance => 
    // dbInstance.create_planes()
    // dbInstance.new_planes()
    app.set('db', dbInstance)
)

app.get('/api/planes/:count', controller.getPlanes)

const port = process.env.PORT || 3000
app.listen( port , () => { console.log(`Server listening on port ${port}`); } );

