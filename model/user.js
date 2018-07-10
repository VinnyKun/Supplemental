/**
 * User model functions.
 *
 * Any time a database SQL query needs to be executed
 * relating to a user (be it C, R, U, D, or Login),
 * one or more of the functions here should be called.
 *
 * NOTE: You can add authentication logic in this model.
 *
 * Export all functions as a module using `module.exports`,
 * to be imported (using `require(...)`) in `db.js`.
 */

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */


module.exports = function(db){

 	const sha256 = require('js-sha256');

/*
    *************************************************************
    *************************************************************
                    New User Registration
    *************************************************************
    *************************************************************

*/ 	

    let createUser = function(email, password_hash, callback){
        
        let queryText = 'INSERT INTO users (email, password_hash) VALUES ($1, $2) RETURNING *';
        const values = [email, sha256(password_hash)];
        db.pool.query(queryText, values, callback);
    };

/*
    *************************************************************
    *************************************************************
                    Current User Login
    *************************************************************
    *************************************************************

*/ 	

    let loginUser = function(email, callback){
  
        let queryText = 'SELECT * FROM users WHERE email=$1';
  		const values = [email];
        db.pool.query(queryText, values, callback);   
    };

  /*
    *************************************************************
    *************************************************************
                    Medicine
    *************************************************************
    *************************************************************

*/   


  let postMedsForm = function (name, dosage,instruction, type, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Morning, Noon, Mid_Afternoon, Evening, Bedtime, users_id, callback) {
  
  let queryText = 'INSERT INTO medication(name, dosage, instruction, type, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Morning, Noon, Mid_Afternoon, Evening, Bedtime, users_id ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17);';
  let values = [name, dosage, instruction, type, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, Morning, Noon, Mid_Afternoon, Evening, Bedtime, users_id ];
  db.pool.query(queryText, values, callback);  

};


    let displayMedsTodayOne = function (day, users_id, callback  ) {
		let queryText ='SELECT * FROM medication Where '+day+'=true AND users_id = $1';
		let values = [users_id]
		db.pool.query(queryText, values, callback); 
    };


        	
    return {
        createUser : createUser,
        loginUser : loginUser,
        postMedsForm: postMedsForm,

        displayMedsTodayOne: displayMedsTodayOne
    };
};
