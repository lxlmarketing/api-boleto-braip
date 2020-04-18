require('dotenv').config()
const httpUtils = require('../utils/http');

module.exports = app => {
    const controller = {};

    controller.sendMessage = (req, res) => {
        httpUtils.doPost(res, "api/v1/send_message", JSON.stringify(req.body));
    };

    controller.getStatus = (req, res) => {
        httpUtils.doGet(res, "api/v1/status");
    };

    return controller;
}