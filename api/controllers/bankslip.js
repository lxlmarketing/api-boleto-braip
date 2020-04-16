require('dotenv').config()

const fs = require('fs');
const pdf = require('html-pdf');
const requestify = require('requestify');

module.exports = app => {
    const controller = {};
    const urlBankslip = process.env.URL_BANKSLIP
    const defaultPath = process.env.DEFAULT_PATH
    const converterConfig = { directory: '/tmp', width: '210mm', height: '297mm'};

    controller.download = (req, res) => {
        const _res = res
        const { salesCode } = req.params;

        var externalURL = generateExternalUrl(salesCode);
        var fullPath = generatePath(salesCode);

        requestify.get(externalURL).then(function (response) {
            var html = formatHtmlToConvertToPDF(response.body); 
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

    function formatHtmlToConvertToPDF(html){
        return html.replace('body{background-color:#fff;margin-right:0}','body{background-color:#fff;zoom:.72;margin-right:0}')
    }

    function generateRandonNumber(){
        return Math.floor( Math.random() * (999999 - 1 + 1) + 1)
    }

    function generatePath(salesCode){
        var fileName = `${salesCode}${generateRandonNumber()}`
        return `${defaultPath}/${fileName}.pdf`
    }

    function generateExternalUrl(salesCode){
        return `${urlBankslip}/${salesCode}`;
    }

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