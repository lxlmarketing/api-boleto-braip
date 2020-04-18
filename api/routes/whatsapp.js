module.exports = (app) => {
  const controller = app.controllers.whatsapp;

  app.route("/api/v1/whatsapp/status")
    .get(controller.getStatus);

  app.route("/api/v1/whatsapp/message")
    .post(controller.sendMessage);
};
