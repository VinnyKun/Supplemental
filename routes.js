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

 	
 	//User registration routes:

 	//gets new user registration route -> this RENDERS register.jsx
	app.get('/users/new', users.newUserForm);
	
	//posts form and information to users table in database -> upon submit REDIRECTs to (/) -> which RENDERS Home.jsx
	app.post('/users/new', users.postUserForm);

	
	//user login routes:

	//posts users input -> if correct REDIRECTS to (/today) route -> which renders caldenerInterfaceThingy.jsx 
	app.post('/login', users.loginUser);
	
	//Clears Cookies and REDIRECTs to (/) -> which RENDERS Home.jsx
	app.get('/logout', users.logoutUser);

	
	//medicine routes:

	//-> this route RENDERS addMedicineForm.jsx
	app.get('/meds/new', users.newMedsForm);
	
	//posts form and information to medication table in database -> upon submit REDIRECTs to (/list) -> which RENDERS personalMedslist.jsx
	app.post('/meds/new', users.postMedsForm);
	
	//gets and maps the particular days meds/supps->renders caldenerInterfaceThingy.jsx 
	app.get('/today', users.displayMedsToday );
	
	//gets and maps the user's medicine -> which RENDERS personalMedslist.jsx
	app.get('/list', users.personalMedsList );

	app.get('/meds/edit/:id', users.editMedsForm);
	app.put('/meds/edit/:id', users.putEditedMedsForm);
	app.delete('/meds/edit/delete/:id', users.deleteMeds);
};







