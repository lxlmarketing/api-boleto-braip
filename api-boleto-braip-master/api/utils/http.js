const unirest = require('unirest');
const apiUrl = process.env.WHATSAPP_API_URL
const apiToken = process.env.WHATSAPP_API_TOKEN

module.exports  = {

    doGet: (response, url) => {
        unirest
            .get(`${apiUrl}/${url}`)
            .headers(buildHeaders())
            .end(function (res) {
                if (res.status == 200) {
                    response.status(200).json(res.body);
                } else {
                    errorResponse(res, response);
                } 
            });
    },

    doPost: (response, url, message) => {
        unirest
        .post(`${apiUrl}/${url}`)
        .headers(buildHeaders())
        .send(message)
        .end(function (res) {
            if (res.status == 200 || res.status == 201) {
                response.status(201).json(res.body);
            } else {
                errorResponse(res, response);
            } 
        });
    }
};

var buildHeaders = function(){
    return {
        "cache-control": "no-cache",
        "Authorization": apiToken
    }
}

var errorResponse = function(res, responseHttp){
    if (res.error) {
        console.log(res.error);
    }
    responseHttp.status(400).json(res.body);
}
