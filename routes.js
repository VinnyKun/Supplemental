/**
 * Routes file.
 *
 * All routes you want to match in the app should appear here.
 * Upon match, a corresponding controller method should be called.
 *
 * Export as a function using `module.exports`,
 * to be imported (using `require(...)`) in `index.js`.
 */

module.exports = (app, db) => {

  	const users = require('./controller/user.js')(db);


  	//test route
 	app.get('/users', users.get );

 	//user registration route
	app.get('/users/new', users.newUserForm);
	app.post('/users/new', users.postUserForm);

	//user login route
	app.post('/login', users.loginUser);
	app.get('/logout', users.logoutUser);
};
