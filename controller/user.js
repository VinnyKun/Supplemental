/**
 * User controller functions.
 *
 * Each user-related route in `routes.js` will call
 * one controller function here.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `routes.js`.
 */

/**
 * ===========================================
 * Controller logic
 * ===========================================
 */

/**
 * ===========================================
 * Export controller functions as a module
 * ===========================================
 */

 const sha256 = require('js-sha256');

module.exports = function(db){

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const users = require('../model/user.js')(db)
  
  const get = (request, response) => {
    // make a query for a user and return that user data
    response.send("WEIRD");
  };

/*
    *************************************************************
    *************************************************************
                    New User Registration
    *************************************************************
    *************************************************************

*/  

  const newUserForm = (request, response) => {
    response.render('register')
  }

  const postUserForm = (request, response) => {

    let email = request.body.email
    let password_hash = request.body.password
   

    users.createUser(email, password_hash, (error, result) => {
      if (error) {
      console.log('query error postUser:', error.stack); 
      } 
      else {
      console.log('query result:', result);

        // redirect to home page
          response.redirect('/');
      }
    

    })

  };

  /*
    *************************************************************
    *************************************************************
                    Current User Login/Logout
    *************************************************************
    *************************************************************

*/  

  const loginUser = (request,response) => {

    let email = request.body.email
    console.log(email);
    let password_hash = sha256 (request.body.password)

    users.loginUser(email, (error, result) => {
      if (error) {
      console.log('query error userLogin:', error.stack);
      }else {
      console.log('query result:', result);

        if(result.rows.length < 1){
          response.status(404).send('you dont exist!');
        }else{

          if( result.rows[0].password_hash ===  password_hash ){

              response.cookie('logged_in', 'true');
              response.cookie('user_id', result.rows[0].id);
              response.render('calendarInterfaceThingy');
          }else{
              response.status(401).send('wrong password!');

          }
        }  
      }   
    })
  }

  const logoutUser = (request, response) => {
    response.clearCookie('user_id');
    response.clearCookie('logged_in');
    response.redirect('/');
  };

  return {
    
    get: get,

    newUserForm: newUserForm,
    postUserForm:postUserForm,

    loginUser:loginUser,
    logoutUser:logoutUser

  };
}
