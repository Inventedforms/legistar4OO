const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const { checkSchema } = require('express-validator/check');

const schemas = require('./schemas');
const subscriptionController = require('./controllers/subscriptionController');

const port = 3000

app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))
// TODO add schema validation to request
app.post('/subscribe', checkSchema(schemas.subscriptionRequest), subscriptionController.subscribe);
//app.post('/subscribe', subscriptionController.subscribe);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
