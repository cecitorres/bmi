/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	find: function(req, res) {
		var user = req.user;

		// make sure we load from the DB and not the session
		var query = User.findOne(user.id)
			.exec(function(err, result) {
				if (err) {
					sails.log.error(err);
					return res.negotiate(err);
				}
				
				res.status(200);
				res.ok(result);
			});
	}
};

