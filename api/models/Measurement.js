/**
* Measurement.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	weight: {
  		type: "float",
  		required: true
  	},
  	height: {
  		type: "float",
  		required: true
  	},
  	user: {
  		model: "user"
  	},
  	bmi: {
  		type: "float",
  		required: true
  	},
  	category: {
  		type: "string",
  		required: true
  	}
  }
};

