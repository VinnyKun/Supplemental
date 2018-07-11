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
				<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
	          
	          <title>
	            Supplemental
	          </title>
	        
	        </head>
	        <body>
	        	

		        	<p>Supplemental</p>
		        	<br/>

		        	<p>Complete list</p>
		        	{this.props.output.names.map((item)=>{
		        		return[
		        			<ul>
		        				<a href={'/meds/edit/'+ item.id}> {item.name} </a>
		        			</ul>
		        		]
		        	})}
		        	<br/>

					<a href="/today"> Today's List </a>
					<br/>
					<a href="/logout"> Logout </a>
					<br/>
					<a href="/meds/new"> Add Medication </a>
					<script src= 'script.js'> </script>

					
			</body>	
      </html>
    );
  }
}

module.exports = Main;