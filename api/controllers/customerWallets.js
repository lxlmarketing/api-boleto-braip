const uuidv4 = require('uuid/v4');
const pdfcrowd = require("pdfcrowd");
const api = new pdfcrowd.HtmlToPdfClient("demo","ce544b6ea52a5621fb9d55f8b542d14d");

module.exports = app => {
  const customerWalletsDB = app.data.customerWallets;
  const controller = {};

  const {
    customerWallets: customerWalletsMock,
  } = customerWalletsDB;

  



  controller.convertTest = (req, res) => {
    var callbacks = pdfcrowd.sendImageInHttpResponse(res, "application/pdf", "result.pdf", "attachment");

    // configure the callback to send an error in the HTTP response
    callbacks.error = function(errMessage, statusCode) {
        res.set('Content-Type', 'text/plain');
        res.status(statusCode || 400);
        res.send(errMessage);
    }

    // run the conversion
    api.convertUrl("https://ev.braip.com/checkout/boleto/venggzd1", callbacks);
  };

  controller.listCustomerWallets = (req, res) => res.status(200).json(customerWalletsDB);

  controller.saveCustomerWallets = (req, res) => {
    customerWalletsMock.data.push({
      id: uuidv4(),
      parentId: uuidv4(),
      name: req.body.name,
      birthDate: req.body.birthDate,
      cellphone: req.body.cellphone,
      phone: req.body.phone,
      email: req.body.email,
      occupation: req.body.occupation,
      state: req.body.state,
    });

    res.status(201).json(customerWalletsMock);
  };

  controller.removeCustomerWallets = (req, res) => {
    const {
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        customerWallets: customerWalletsMock,
      });
    } else {
      customerWalletsMock.data.splice(foundCustomerIndex, 1);
      res.status(200).json({
        message: 'Cliente encontrado e deletado com sucesso!',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }
  };

  controller.updateCustomerWallets = (req, res) => {
    const { 
      customerId,
    } = req.params;

    const foundCustomerIndex = customerWalletsMock.data.findIndex(customer => customer.id === customerId);

    if (foundCustomerIndex === -1) {
      res.status(404).json({
        message: 'Cliente não encontrado na base.',
        success: false,
        customerWallets: customerWalletsMock,
      });
    } else {
      const newCustomer = {
        id: customerId ,
        parentId: req.body.parentId,
        name: req.body.name,
        birthDate: req.body.birthDate,
        cellphone: req.body.cellphone,
        phone: req.body.phone,
        email: req.body.email,
        occupation: req.body.occupation,
        state: req.body.state,
        createdAt: new Date()
      };
      
      customerWalletsMock.data.splice(foundCustomerIndex, 1, newCustomer);
      
      res.status(200).json({
        message: 'Cliente encontrado e atualizado com sucesso!',
        success: true,
        customerWallets: customerWalletsMock,
      });
    }
  }

  return controller;
}