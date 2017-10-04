//All GET/POST requests
module.exports = function (app) {

    app.get('/', function(req, res) {
        res.sendfile("index.html");
    });

    app.post('/calculate-crons', function (req, res) {
        var response = {};
        var json = JSON.parse(req.body.json);
        //invalid input
        if(!('start_date' in json) || !('end_date' in json)  || !('frequencies' in json)) 
            return res.status(404).end('<h1>404 Not Found</h1>');

        var startDate = json.start_date;
        var endDate = json.end_date;
        var frequencies = json.frequencies;
        //loop through frequencies
        frequencies.forEach( function(frequency) {
            var parser = require('cron-parser');
            var options = {
                currentDate: startDate,
                endDate: endDate,
                iterator: true
            };
            var frequencyName = frequency.name;
            if(!(frequencyName in response)) {
                response[frequencyName] = [];
            }
            //loop through crons
            frequency.crons.forEach( function(cron) { 
                try {
                    var interval = parser.parseExpression(cron, options);

                    while (true) {
                        try {
                            var obj = interval.next();
                            response[frequencyName].push(new Date(obj.value.toString()).toJSON());
                        } catch (e) {
                            break;
                        }
                    }

                    } catch (err) {
                        console.log("err: " + err);
                    }
            })
        })

        //sort and remove duplicates
        for (obj in response) {
            response[obj] = response[obj].filter( function( item, index, inputArray ) {
                return inputArray.indexOf(item) == index;
            });
            response[obj].sort();
        }

        return res.json(response);
    });
}
