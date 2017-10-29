/**
 * CustomerAddress.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    address:{
      type:'string',
      required:true
    },
    betweenAddress:{
      type:'string'
    },
    city:{
      type:'string'
    },
    state:{
      type:'string'
    },
    country:{
      type:'string'
    },
    zipCode:{
      type:'string'
    },
    latitude:{
      type:'string'
    },
    longitude:{
      type:'string'
    },
  }
};

