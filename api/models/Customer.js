/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code: {
      type: 'string',
      required: true
    },
    name: {
      type: 'string',
    },
    lastName: {
      type: 'string',
    },
    /*customerAddress: {
     type:'string',
     },*/
    phone: {
      type: 'string',
    },
    mobile: {
      type: 'string',
    },
    email: {
      type: 'email',
    },
    dni: {
      type: 'string',
    },
    cuit: {
      type: 'string',
    },
    iva: {
      model: 'customerTax',
    },
    description: {
      type: 'string',
    },
    buyDate: {
      type: 'string',
    },
    dueWarranty: {
      type: 'string',
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true
    }
  }
}
