require('dotenv').config()
const pdfcrowd = require("pdfcrowd");
const converApi = new pdfcrowd.HtmlToPdfClient("demo","ce544b6ea52a5621fb9d55f8b542d14d");

module.exports = app => {
    const controller = {};
    const urlBankslip = process.env.URL_BANKSLIP

    controller.download = (req, res) => {

    const { salesCode } = req.params;

    var url = `${urlBankslip}/${salesCode}`;
    var callbacks = pdfcrowd.sendImageInHttpResponse(res, "application/pdf", `${salesCode}.pdf`, "attachment");
    callbacks.error = function(errMessage, statusCode) {
        res.set('Content-Type', 'text/plain');
        res.status(statusCode || 400);
        res.send(errMessage);
    }
    converApi.convertUrl(url, callbacks);
    };
  
  return controller;
}