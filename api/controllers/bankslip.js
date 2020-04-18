require('dotenv').config()

const fs = require('fs');
const pdf = require('html-pdf');
const requestify = require('requestify');
const bankslipUtils = require('../utils/bankslip');

module.exports = app => {
    const controller = {};
    const converterConfig = { directory: '/tmp', width: '210mm', height: '297mm'};

    controller.download = (req, res) => {
        const _res = res
        const { salesCode } = req.params;

        var externalURL = bankslipUtils.generateExternalUrl(salesCode);
        var fullPath = bankslipUtils.generatePath(salesCode);

        requestify.get(externalURL).then(function (response) {
            var html = bankslipUtils.formatHtmlToConvertToPDF(response.body); 
            pdf.create(html, converterConfig).toFile(fullPath, function (err, res) {
                if (err) {
                    return console.log(err);
                }
                console.log(`Download: ${res.filename}`); 
                // _res.download(res.filename);
                _res.download(res.filename,`${salesCode}.pdf`, function(err){
                    deleteFile(res.filename);
                });
            });
        });
    };

    function deleteFile (file) { 
        fs.unlink(file, function (err) {
            if (err) {
                console.error(err.toString());
            } else {
                console.warn(`Deleted: ${file}`);
            }
        });
    }

    return controller;
}