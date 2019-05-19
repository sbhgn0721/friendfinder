

//initialize PORT
var PORT = process.env.PORT || 3000;


//make the app to listen to client's requests
app.listen(PORT, function(){
    console.log("APP is listening on PORT " + PORT);

})

//routes
app.get("/", function(req, res){
    res.json(path.join(_dirname, "public/index.html"));
});