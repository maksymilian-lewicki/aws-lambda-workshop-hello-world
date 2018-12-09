
const axios = require('axios')
const url = 'http://checkip.amazonaws.com/';
let response;

exports.handler = function (event, context, callback) {
    axios(url)
        .then(function (ret) {
            response = {
                'statusCode': 200,
                'body': JSON.stringify({
                    message: 'hello world',
                    location: ret.data.trim()
                })
            }
            console.log("response: " + JSON.stringify(response));
            callback(null, response);
        })
        .catch(function (err) {
            console.log(err);
            callback(err);
        });
};
