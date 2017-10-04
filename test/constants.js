module.exports = {

    INPUT : {
                "start_date": "2016-02-01T08:00:00.000Z",
                "end_date": "2016-02-28T08:00:00.000Z",
                "frequencies": [{
                    "name": "Monthly",
                    "crons": ["0 0 0 25 * *"]
                    },
                    {
                    "name": "BiWeekly",
                    "crons": ["0 0 0 20 * *", "0 0 0 10 * *"]
                    },
                    {
                    "name": "Weekly",
                    "crons": ["0 0 0 * * 5"]
                    },
                    {
                    "name": "Quarterly",
                    "crons": ["0 0 0 25 3 *", "0 0 0 27 6 *", "0 0 0 30 9 *", "0 0 0 22 12 *", "0 0 0 25 3 *"]
                }]
            },
    OUTPUT : {
                "Monthly": [
                    "2016-02-25T08:00:00.000Z"
                ],
                "BiWeekly": [
                    "2016-02-10T08:00:00.000Z",
                    "2016-02-20T08:00:00.000Z"
                ],
                "Weekly": [
                    "2016-02-05T08:00:00.000Z",
                    "2016-02-12T08:00:00.000Z",
                    "2016-02-19T08:00:00.000Z",
                    "2016-02-26T08:00:00.000Z"
                ],
                "Quarterly": []
            },
    INPUT2 : {
                "start_date": "2016-02-02T08:00:00.000Z",
                "end_date": "2016-02-28T08:00:00.000Z",
                "frequencies": [
                {
                    "name": "Monthly",
                    "crons": ["0 0 0 1 * *"]
                }]
            },
    OUTPUT2 : { Monthly:[] },
    INPUT3 : {
                "start_date": "2016-03-02T08:00:00.000Z",
                "end_date": "2016-12-28T08:00:00.000Z",
                "frequencies": [
                {
                    "name": "Quarterly",
                    "crons": ["0 0 0 25 3 *", "0 0 0 27 6 *", "0 0 0 30 9 *", "0 0 0 22 12 *", "0 0 0 25 3 *"]
                }]
            },
    OUTPUT3 : {
                "Quarterly": [
                    "2016-03-25T07:00:00.000Z",
                    "2016-06-27T07:00:00.000Z",
                    "2016-09-30T07:00:00.000Z",
                    "2016-12-22T08:00:00.000Z"
                ]
            }
}