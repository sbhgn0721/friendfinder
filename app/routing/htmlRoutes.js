var path = require("path");

module.exports = function(app){;


//routes that displays a JSON of all possible friends
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

//routes that post survey result
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/home.html"))
});
}