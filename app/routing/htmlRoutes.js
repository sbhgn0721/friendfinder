//routes that sends the user the html page
app.get("/", function(req, res){
    res.sendFile(path.join(_dirname, "public/home.html"));
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "public/survey.html"))
})