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
			                  Daily Intake
			                </h1>
						      
						      <span class="navbar-burger burger" data-target="navMenu">
						        <span></span>
						        <span></span>
						        <span></span>
						      </span>
						    </div>
						<div id="navMenu" class="navbar-menu">
						<div class="navbar-end">
								<a href="/list" class="navbar-item "> My Meds/Supps</a>
								<a href="/meds/new" class="navbar-item "> +Medication</a>
						        <a href="/logout" class="navbar-item ">Logout</a>
						      </div>
						</div>
					</div>
				</nav>

					

				
			        <div class="columns">
			        	
			        	<div class="column"></div>

			        	<div class="column is-three-fifths">
			        
				        <div className='calendar-today'>
				  			<div className ='month-label'></div>
				  			<div className ='day-label'></div>
				  			<div className ='weekday-label'></div>
						</div>

						<script src= 'script.js'> </script>
						</div>

						<div class="column"></div>
					</div>
				
				
			        <div class="columns">
			        	<div class="column"></div>

						<div class="column four-fifths">
				  			<div class="card">
			                  <div class="card-content">
			                    <div class="content">							
									<table class="table is-bordered">
											<tr>
												<th>Name</th>
												<th>dosage</th>
					       						<th>Instruction</th>
					       						<th>Supplement</th>
					       						<th>Administered</th>
											</tr>

										<tbody>

											<tr><th>Morning</th></tr>
											{this.props.output.Morning.map((item)=>{
											return[
												<tr>
													<td>{item.name}</td>
													<td>{item.dosage}</td>
						       						<td>{item.instruction}</td>
						       						<td>{item.type}</td>
						       						<td>
													<div class="field">
													    <p class="control">
													        <div class="b-checkbox is-warning is-circular">
													            <input id="checkbox" class="styled" type="checkbox"/>
													            <label for="checkbox">
													                
													            </label>
													        </div>
													    </p>
													</div>
						       						</td>
												</tr>
											]
											})}

											<tr><th>Noon</th></tr>
											{this.props.output.Noon.map((item)=>{
											return[
					
												<tr>
													<td>{item.name}</td>
													<td>{item.dosage}</td>
						       						<td>{item.instruction}</td>
						       						<td>{item.type}</td>
						       						<td>
														<label class="checkbox">
														  <input type="checkbox"/>
														</label>		       							
						       						</td>
												</tr>
											]
											})}

											<tr><th>Mid_Afternoon</th></tr>
											{this.props.output.Mid_Afternoon.map((item)=>{
											return[

												<tr>
													<td>{item.name}</td>
													<td>{item.dosage}</td>
						       						<td>{item.instruction}</td>
						       						<td>{item.type}</td>
						       						<td>
						       							<label class="checkbox">
														  <input type="checkbox"/>
														</label>
						       						</td>
												</tr>
											]
											})}

											<tr><th>Evening</th></tr>
											{this.props.output.Evening.map((item)=>{
											return[

												<tr>
													<td>{item.name}</td>
													<td>{item.dosage}</td>
						       						<td>{item.instruction}</td>
						       						<td>{item.type}</td>
						       						<td>
						       							<label class="checkbox">
														  <input type="checkbox"/>
														</label>
						       						</td>
												</tr>
											]
											})}

											<tr><th>Bedtime</th></tr>
											{this.props.output.Bedtime.map((item)=>{
											return[

												<tr>
													<td>{item.name}</td>
													<td>{item.dosage}</td>
						       						<td>{item.instruction}</td>
						       						<td>{item.type}</td>
						       						<td>
						       							<label class="checkbox">
														  <input type="checkbox"/>
														</label>
						       						</td>
												</tr>
											]
											})}																													
										</tbody>
									</table>
								</div>
							  </div>
							</div>	
						</div>						
						<div class="column"></div>
					</div>
				

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