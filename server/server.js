﻿// The server.js file is the main file of your Node.js application 
// It will load the express.js file as a module to bootstrap your Express application
//
//The process.env.NODE_ENV variable is set to the default 'development‘
//value if itdoesn 't exist.
// Set the 'NODE_ENV' variable
console.log("process.env.NODE_ENV: " + process.env.NODE_ENV);
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
const dotenv = require("dotenv");
dotenv.config();
// Load the module dependencies
var mongoose = require('./config/mongoose'),
    express = require('./config/express');
// Create a new Mongoose connection instance
var db = mongoose();
// Create a new Express application instance
var app = express();
// Use the Express application instance to listen to the '5000' port
app.listen(process.env.PORT);
// Use the module.exports property to expose our Express application instance for external usage
module.exports = app; //returns the application object
// Log the server status to the console
console.log('Server running at http://localhost:' + process.env.PORT);
