const fs = require('fs');

exports.saveResult = (req, res) => {
    let responseTime = req.body.responseTime;
    let accuracy = req.body.accuracy;
    let userCode = req.body.userCode;
    let resultsTrials = req.body.resultsTrials;

    let query = `INSERT INTO results(response, accuracy, userCode, resultsTrials) VALUES (${responseTime}, ${accuracy}, "${userCode}", "${resultsTrials}");`

    db.query(query, (err, result) => {
        if (err) {
            return res.status(500).send(err);
        }
    });
}
