//routes that displays a JSON of all possible friends
app.get("/api/friends", function(req, res){
    res.sendFile(path.join(_dirname, "public/home.html"));
});

//routes that post survey result
app.post("/api/friends", function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"))
})