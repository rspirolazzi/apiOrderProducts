/**
 * Order.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    user: {
      mode: 'user',
    },
    customer: {
      model: 'customer',
    },
    dueDate: {
      type: 'datetime',
    },
    doneDate: {
      type: 'datetime',
    },
    numeric: {
      type: 'integer',
    },
    status: {
      type: 'string',
      enum: ['pending', 'approved', 'denied', 'draft'],
      defaultsTo: 'draft'
    },
    description: {
      type: 'string',
    },
    total: {
      type: 'float'
    },
    products: {
      collection: 'orderItem',
      via: 'order'
    }
  }
}
