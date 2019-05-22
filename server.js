// require npm packages to run the app

const express = require('express');
const apiRoutes = require("./apiRoutes");


//Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use("/api", apiRoutes);
app.use(express.static("app/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Router
//The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// LISTENER
// The below code effectively "starts" our server

app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});