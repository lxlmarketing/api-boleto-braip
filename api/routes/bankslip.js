module.exports = app => {
    const controller = app.controllers.bankslip;

    app.route('/api/v1/bankslip/download/:salesCode')
        .get(controller.download)
  }