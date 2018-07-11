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
              response.redirect('/today');
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

  /*
    *************************************************************
    *************************************************************
                    Medicine
    *************************************************************
    *************************************************************

*/   

  const newMedsForm = (request, response) => {
    response.render('addMedicineForm')
  }

  const postMedsForm = (request, response) => {
  
    let meds = request.body;
    let user_id = request.cookies['user_id'];

    users.postMedsForm(meds.name, meds.dosage, meds.instruction, meds.type, meds.Monday, meds.Tuesday, meds.Wednesday, meds.Thursday, meds.Friday, meds.Saturday, meds.Sunday, meds.Morning, meds.Noon, meds.Mid_Afternoon, meds.Evening, meds.Bedtime, user_id, (error, result) => {
      if (error) {
        console.log('query error postMeds:', error.stack);
        }else {
        console.log('query result:', result);
        response.redirect('/list');
        }
    }) 
  }  

  
  const displayMedsToday = (request, response) => {
      let date = new Date();
      let weekday = new Array(7); 
      weekday[0] = "sunday";
      weekday[1] = "monday";
      weekday[2] = "tuesday";
      weekday[3] = "wednesday";
      weekday[4] = "thursday";
      weekday[5] = "friday";
      weekday[6] = "saturday";

    let today = weekday[date.getDay()];    
    let yesterday = weekday[date.getDay() - 1];
    let tomorrow = weekday[date.getDay() + 1];
    
    let user_id = request.cookies['user_id'];

    users.displayMedsTodayOne(today, user_id, (error, result) => {

      const output = {
        Morning:[],
        Noon:[],
        Mid_Afternoon:[],
        Evening:[],
        Bedtime:[]
      }


      for( var i=0; i<result.rows.length; i++ ){
        
        let singleRow = result.rows[i];

        if( singleRow.morning == true ){
          output.Morning.push( singleRow );
        }

        if( singleRow.noon == true ){
          output.Noon.push( singleRow );
        }

        if( singleRow.mid_afternoon == true ){
          output.Mid_Afternoon.push( singleRow );
        }

        if( singleRow.evening == true ){
          output.Evening.push( singleRow );
        }

        if( singleRow.bedtime == true ){
          output.Bedtime.push( singleRow );
        }
      }
      console.log(output);

      response.render('calendarInterfaceThingy', {output: output})
 
    });
  }

  const personalMedsList = (request, response) => {

    let user_id = request.cookies['user_id'];

    users.personalMedsList(user_id, (error, result) =>{

      if (error) {
        console.log('query error Medslist:', error.stack);
        }else {

          const output = {
            names:[]
          }          

          for (var i = 0; i < result.rows.length; i++) {
            output.names.push(result.rows[i])
          }
          console.log(output);
          response.render('personalMedslist', {output: output})
        }
    })
  }

  const editMedsForm = (request,response) =>{

    let medId = request.params.id

    users.editMedsForm(medId, (error,result) =>{
      if (error) {
        console.log('query error Medslist:', error.stack);
      }else {
        var context = {
          form: result.rows[0]
        }

        response.render('editMedicineForm', {context:context})
      }
    })
  }

  const putEditedMedsForm = (request,response) =>{

    let meds = request.body;
    let medId = request.params.id
        
    users.putEditedMedsForm (medId, meds.name, meds.dosage, meds.instruction, meds.type, meds.Monday, meds.Tuesday, meds.Wednesday, meds.Thursday, meds.Friday, meds.Saturday, meds.Sunday, meds.Morning, meds.Noon, meds.Mid_Afternoon, meds.Evening, meds.Bedtime, (error,result) =>{
      if (error) {
        console.log('query error Medslist:', error.stack);
      }else {
        console.log('query result:', result);
        response.redirect('/list')
      }
    })
  }

  const deleteMeds = (request,response) =>{
    
    let medId = request.params.id
    
    users.deleteMeds(medId, (error,result)=>{
      if (error) {
        console.log('query error delete', error.stack);
      } else {
        console.log('query result:', result);

        // redirect to home page
        response.redirect('/list');
        //response.send('hello');
      }
    })    

  }
 
  return {
    
    get: get,

    newUserForm: newUserForm,
    postUserForm:postUserForm,

    loginUser:loginUser,
    logoutUser:logoutUser,

    newMedsForm:newMedsForm,
    postMedsForm:postMedsForm,

    displayMedsToday:displayMedsToday,
    personalMedsList:personalMedsList,

    editMedsForm:editMedsForm,
    putEditedMedsForm:putEditedMedsForm,

    deleteMeds: deleteMeds
  };
}




