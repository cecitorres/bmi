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
		var bmi = new BMI(Number(input.weight), Number(input.height));

		// return error for now
		// @todo accept imperial system
		if(input.system == "imperial") {
			// calculate.convertConfusingSystemToMetricSystem();
			return res.negotiate(err)
		}
		
		var getBMI = bmi.getBMI();

		var data = {
			weight: bmi.getWeight(),
			height: bmi.getHeight(),
			bmi: getBMI,
			user: user.id,
			category: bmi.getCategory(getBMI)
		}
		
		Model.create(data).exec(function(err, result) {
			if (err) {
				sails.log.error(err);
				return res.negotiate(err);
			}

			// Update the user with the last weight and height so
			// we can suggest on the next visit
			User.update(user.id, {
				"lastHeight": data.height,
				"lastWeight": data.weight
			}, function(err, updated) {
				if (err) {
					sails.log.error(err);
					return res.negotiate(err);
				}

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

		});
	},

	find: function(req, res) {
		var user = req.user;
		var Model = actionUtil.parseModel(req);

		var query = Measurement.find()
			.limit(actionUtil.parseLimit(req))
			.skip(actionUtil.parseSkip(req))
			.sort(actionUtil.parseSort(req))
			.exec(function(err, results) {
				sails.log(err);
				sails.log(results);

				res.ok(results);
			});
	}
};

