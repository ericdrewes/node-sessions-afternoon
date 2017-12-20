const swag = require('../models/swag');

module.exports = {
	add: (req, res, next) => {
		const {id} = req.query;
		let {cart} = req.session.user;

		const index = cart.findIndex(swag => swag.id === id);

		if( index === -1){
			const selectedSwag = swag.find(swag => swag.id === id);

			cart.push(selectedSwag);
			res.session.user.total += selectedSwad.price;
		}
		res.status(200).json(req.session.user)
	},

	delete: (req, res, next) => {
		const {id} = req.query;
		const {cart} = req.session.user;

		if(selectedSwag){
			const i = cart.findIndex(swag => swag.id === id);
			cart.splice(i, 1);
			res.session.user.total -= selectedSwag.price;
		}
		res.status(200).json(req.session.user);
		
	},
	checkout: (req, res, next) => {
		const {user} = req.session;
		user.cart = [];
		user.total = 0

		res.status(200).json(req.session.user);
	}
}