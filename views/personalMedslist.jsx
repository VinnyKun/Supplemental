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
				<link rel="shortcut icon" type="image/png" href="/pilly.png"/>
				<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
	          
	          <title>
	            Supplemental
	          </title>
	        
	        </head>
	        <body>
				<nav class="navbar is-danger">
					<div class="container">
						<div class="navbar-brand">
			                <h1 class=" navbar-item subtitle is-3">  
			                  My Medication
			                </h1>
						      
						      <span class="navbar-burger burger" data-target="navMenu">
						        <span></span>
						        <span></span>
						        <span></span>
						      </span>
						    </div>
						<div id="navMenu" class="navbar-menu">
							<div class="navbar-end">
								<a href="/today" class="navbar-item "> Today</a>
								<a href="/meds/new" class="navbar-item "> +Medication</a>
						        <a href="/logout" class="navbar-item ">Logout</a>
						      </div>
						</div>
					</div>
				</nav>		        	
	        	
				<section class="section">
					<div class="columns">
						<div class="column"></div>			
						<div class="column is-two-fifths">
							<div class="card">
                  				<div class="card-content">
                    				<div class="content">
										<div class="container">
								        	<p class="subtitle is 2">Click to Edit:</p>
								        	{this.props.output.names.map((item)=>{
								        		return[
								        			<ul>
								        				<a href={'/meds/edit/'+ item.id}> {item.name} </a>
								        			</ul>
								        		]	
								        	})}
					        			</div>
					        		</div>
					        	</div>
					        </div>			
					    </div>
					    <div class="column is-one-quarter"></div>  
					    <div class="column"></div>  
				    </div>    	
		        </section>	

			  <section class="section">
	            <footer class="footer">
	              <div class="content has-text-centered">
	                <p>
	                  <strong>Supplemental</strong> by <a href="#">VinnyKun</a>. The source code is <strong>obviously not</strong> licensed by
	                  <a href="#"> MIT</a>.
	                </p>
	              </div>
	            </footer>
	          </section>
					
			</body>	
      </html>
    );
  }
}

module.exports = Main;