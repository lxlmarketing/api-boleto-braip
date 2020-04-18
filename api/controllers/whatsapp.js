require('dotenv').config()
const httpUtils = require('../utils/http');

module.exports = app => {
    const controller = {};
    const aplicationExternalUrl = process.env.APLICATION_EXTERNAL_URL

    controller.sendMessage = async (req, res) => {
        await httpUtils.doPost(res, "api/v1/send_message", JSON.stringify(req.body));
    };

    controller.sendFile = (req, res) => {
        var body = {
            'caption': req.body.caption,
            'number': req.body.number,
            'url': `${aplicationExternalUrl}/api/v1/bankslip/download/${req.body.salesCode}`
        }
        httpUtils.doPost(res, "api/v1/send_message_file_from_url", JSON.stringify(body));
    };

    controller.getStatus = (req, res) => {
        httpUtils.doGet(res, "api/v1/status");
    };

    controller.getQrcode = (req, res) => {
        httpUtils.doGet(res, "api/v1/generate_qrcode");
    };

    return controller;
}