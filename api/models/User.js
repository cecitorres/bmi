/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	email: {
  		type: "string",
  		required: true,
      unique: true
  	},
  	username: {
  		type: "string",
      unique: true
  	},
    name: {
      type: "string"
    },
  	lastHeight: {
  		type: "height"
  	},
  	lastWeight: {
  		type: "height"
  	},
    passports: {
      collection: 'Passport',
      via: 'user'
    }
  }
};

