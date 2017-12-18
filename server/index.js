const express = require('express');
const  {json} = require('body-parser');
const session = require('express-session');

//MIDDLEWARE
const checkForSession = require('./middlewares/checkForSessions');

//CONTROLLERS
const swag_controller = require('./controllers/swag_controller');
const auth_controller = require('./controllers/auth_controller')

const app = express();

app.use(json());
app.use( session({
	secret: "a cow jumped over venus to get back to the mothership",
	resave: false,
	saveUninitialized: false;
}));

app.use(checkForSession)

//Swag:
app.get('/api/swag', swag_controller.read);

// Auth:
app.post('/api/login', auth_controller.login);
app.post('/api/register', auth_controller.register);
app.post('/api/signout', auth_controller.signout);
app.post('/api/user', auth_controller.getUser);


const port = 3000;
app.listen(port, () => {console.log(`Listening on Port: ${port}!`);});