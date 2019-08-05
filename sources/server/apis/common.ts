import * as express from 'express';

function open(app: express.Express) {
	app.get('/status', async (req, res) => {
		res.send({status: 'You should not be here'});
	});
}

export default {open}