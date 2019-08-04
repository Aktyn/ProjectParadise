const express = require('express');
const app = express();
const port = 1234;

app.get('/', (req, res) => res.send('Website under construction'));

app.listen(port, () => console.log(`Server listening on port: ${port}!`));
