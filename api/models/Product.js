/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    code: {
      type: 'string',
      required: true,
      unique:true
    },
    name: {
      type: 'string',
      required: true
    },
    description: {
      type: 'string',
    },
    price: {
      type: 'float',
      defaultsTo: 0
    },
    category: {
      model: 'productCategory',
      //required: true
    },
    enabled: {
      type: 'boolean',
      defaultsTo: true
    }
  }
}
