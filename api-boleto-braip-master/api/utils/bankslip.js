require('dotenv').config()
const urlBankslip = process.env.URL_BANKSLIP
const defaultPath = process.env.DEFAULT_PATH

module.exports  = {

    formatHtmlToConvertToPDF: (html) => {
        return html.replace('body{background-color:#fff;margin-right:0}','body{background-color:#fff;zoom:.72;margin-right:0}')
    },

    generatePath: (salesCode) => {
        var fileName = `${salesCode}${generateRandonNumber()}`
        return `${defaultPath}/${fileName}.pdf`
    },

    generateExternalUrl: (salesCode) => {
        return `${urlBankslip}/${salesCode}`;
    }

};

var generateRandonNumber = function(){
    return Math.floor( Math.random() * (999999 - 1 + 1) + 1)
}