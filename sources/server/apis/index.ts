import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';
import * as path from 'path';

import Config from '../../common/config';
import CommonApi from './common';

const app = express();
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(bodyParser.json({limit: '10mb'}));

app.use(function(req, res, next) {//ALLOW CROSS-DOMAIN REQUESTS
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,POST');
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');

    next();
});

CommonApi.open(app);

app.listen(Config.SERVER_PORT, () => console.log(`Server listens on: ${Config.SERVER_PORT}!`));

export default {
	shareClientFiles() {
		try {
			const client_dir = path.join(__dirname, '..', '..', '..', 'dist', 'client');
			app.use(express.static(client_dir));

			const index_html = fs.readFileSync(client_dir + '/index.html', 'utf8');
			app.get('*', (req, res) => res.send(index_html));
			console.log('Client files are now accessible through express server');
		}
		catch(e) {
			console.error('Cannot share client files:', e);
		}
	}
}