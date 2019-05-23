
var friendsData = require("../data/friends");

module.exports = function(app){

app.get("/api/friends", function (req, res) {
    res.json(friendsData)

});

app.post("/api/friends", function (req, res) {
    let userScore = req.body.scores;
        const scoresArr = [];
        let bestMatch = 0;


        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff = 0;
            for (var j = 0; j < userScore.length; j++) {
                scoreDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(userScore[j])))
            }
            scoresArr.push(scoreDiff);
        }

        // loop through ours scoresArr
        for (var i = 0; i < scoresArr.length; i++) {
            if (scoresArr[i] <= scoresArr[bestMatch]) {
                bestMatch = i;
            }
        }

        // return the best match
        let soulMate = friendsData[bestMatch];
        res.json(soulMate);
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




