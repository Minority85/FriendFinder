var newFriend = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(newFriend);
    });

    app.post("/api/friends", function (req, res) {

        console.log(req.body.Score);

        var scoreHolder = req.body.Score;

        console.log(newFriend);

        var resultsArray = [];

        for (var i = 0; i < newFriend.length; i++) {

            var check = newFriend[i].Score;

            resultsArray.push(check);

            console.log(resultsArray);
        }

        // resultsArray.sort(function (a, b) { return a - b });

        // console.log(resultsArray);
        // console.log(resultsArray[0]);

        var scoreResult = resultsArray.reduce(function (prev, curr) {
            return (Math.abs(curr - scoreHolder) < Math.abs(prev - scoreHolder) ? curr : prev);
        });

        console.log(scoreResult);

        for (var i = 0; i < newFriend.length; i++) {

            if (scoreResult === newFriend[i].Score) {
                var friendResult = [
                    {
                        Name: newFriend[i].Name,
                        Score: newFriend[i].Score,
                        Image: newFriend[i].Image,
                    }
                ];

                res.json(friendResult);
            }
        }

        newFriend.push(req.body);

    });
}
