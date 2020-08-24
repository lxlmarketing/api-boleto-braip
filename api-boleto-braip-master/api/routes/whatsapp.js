module.exports = (app) => {
  const controller = app.controllers.whatsapp;

    app.route("/api/v1/whatsapp/status")
        .get(controller.getStatus);

    app.route("/api/v1/whatsapp/qrcode")
        .get(controller.getQrcode);

    app.route("/api/v1/whatsapp/message")
        .post(controller.sendMessage);

    app.route("/api/v1/whatsapp/file")
        .post(controller.sendFile);
};
