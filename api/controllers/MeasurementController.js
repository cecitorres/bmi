/**
 * MeasurementController
 *
 * @description :: Server-side logic for managing measurements
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var actionUtil = require('../../node_modules/sails/lib/hooks/blueprints/actionUtil');
var BMI = require("../lib/BMI.js");

module.exports = {
	// return the calculate view
	calculate: function(req, res) {
		return res.view("calculate");
	},

	// return the history page
	history: function(req, res) {
		return res.view("history");
	},

	// create a new measurement data point
	create: function(req, res, next) {
		var user = req.user;
		var Model = actionUtil.parseModel(req);

		// parse values
		var input = actionUtil.parseValues(req);

		// Instantiate the BMI class
		var calculate = new BMI(input.weight, input.height);

		// return error for now
		// @todo accept imperial system
		if(input.system == "imperial") {
			// calculate.convertConfusingSystemToMetricSystem();
			return res.negotiate(err)
		}

		var bmi = calculate.getBMI();
		var category = calculate.getCategory();
		
		var data = {
			weight: input.weight,
			height: calculate.getHeight(),
			bmi: bmi,
			user: user.id,
			category: category
		}
		
		Model.create(data).exec(function(err, result) {
			if (err) return res.negotiate(err);

			// If we have the pubsub hook, use the model class's publish method
			// to notify all subscribers about the created item
			if (req._sails.hooks.pubsub) {
				if (req.isSocket) {
					Model.subscribe(req, result);
					Model.introduce(result);
				}
				
				Model.publishCreate(result, !req.options.mirror && req);
			}
			
			res.status(201);
			res.ok(result.toJSON());
		});
	}
};

