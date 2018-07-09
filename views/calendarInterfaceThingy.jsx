var React = require("react");
var layout= require('./layout.jsx')



class Main extends React.Component {
  render() {
    return (
        <html>
	        <head>
	        	
	        	<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
	        	<link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"/>
	        	<link rel="stylesheet" type="text/css" href="/style.css"/>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css" />
	          
	          <title>
	            Supplemental
	          </title>
	        
	        </head>
	        <body>
	        <div class="columns">
	        	
	        	<div class="column"></div>

	        	<div class="column is-two-fifths">
	        
		        <div className='calendar-today'>
		  			<div className ='month-label'></div>
		  			<div className ='day-label'></div>
		  			<div className ='weekday-label'></div>
				</div>

				<script src= 'script.js'> </script>
				<a href="/logout"> Logout </a>
				<br/>
				<a href="/meds/new"> Add Medication </a>
				</div>

				<div class="column is-two-fifths">
				<p>Supplemental</p>
				<p>Table goes here</p>
				</div>
				<div class="column"></div>

			</div>	
			</body>	
      </html>
    );
  }
}

module.exports = Main;