
var friendsData = require("../data/friends");

module.exports = function(app){

app.get("/api/friends", function (req, res) {
    res.json(friendsData)

});

app.post("/api/friends", function (req, res) {
    var userScore = req.body.scores;
        var scoresArr = [];
        var bestMatch = 0;


        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])))
            }
            scoresArr.push(scoreDiff);
        }

        // loop through scoresArr
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        // get the best match
        var bestFriend = friendsData[bestMatch];
        res.json(bestFriend);
        friendsData.push(req.body)


});

app.post("/api/clear", (req, res) => {
    // Empty out the arrays of data
    friendsData.length = [];
    res.json({
        ok: true
    });
});
}




