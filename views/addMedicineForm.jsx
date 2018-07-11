var React = require("react");
var layout= require('./layout.jsx')




class Form extends React.Component {
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
		                  Add Medication
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
							<a href="/list" class="navbar-item "> My Medication</a>
					        <a href="/logout" class="navbar-item ">Logout</a>
					      </div>
					</div>
				</div>
			</nav>		

			<section class="section">
				<div class="columns">

					<div class="column"></div>
		  			<div class="column is-two-thirds">

			  			<div class="card">
		                  <div class="card-content">
		                    <div class="content">
		                    
		                    <form className="medicine-form" method="POST" action="/meds/new">
							
							<div class="field">
								<label class="label">Name</label>
								<p class="control has-icons-left">
									<input class="input" type="name" name="name" placeholder="Medication or Supplement Name"/>
									<span class="icon is-small is-left">
										<i class="fas fa-medkit"></i>
									</span>
								</p>
							</div>

							<div class="field">
								<label class="label">Dosage</label>
								<p class="control has-icons-left">
									<input class="input" type="name" name="dosage" placeholder="Dosage in Mgs, Ml,tablets etc"/>
									<span class="icon is-small is-left">
										<i class="fas fa-medkit"></i>
									</span>
								</p>
							</div>

							<div class="field">
								<label class="label">Instruction</label>
								<p class="control has-icons-left">
									<input class="input" type="name" name="instruction" placeholder="e.g. Before/After Food"/>
									<span class="icon is-small is-left">
										<i class="fas fa-medkit"></i>
									</span>
								</p>
							</div>

							<div class="field">
								<label class="label">Type</label>
								<p class="control has-icons-left">
									<input class="input" type="name" name="type" placeholder="Prescription or Supplement"/>
									<span class="icon is-small is-left">
										<i class="fas fa-medkit"></i>
									</span>
								</p>
							</div>

							<div class="field">
								<label class="label">Are the Doses Required on:</label>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Monday?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value='true' name="Monday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value='false' name="Monday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Tuesday?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Tuesday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false"  name="Tuesday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Wednesay?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true"  name="Wednesday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Wednesday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Thursday?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true"  name="Thursday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false"  name="Thursday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Friday?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true"  name="Friday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false"  name="Friday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Saturday?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true"  name="Saturday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false"  name="Saturday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Sunday</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Sunday"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Sunday"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field">
								<label class="label">  Are the Doses Taken at:</label>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Morning?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Morning"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Morning"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Noon?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Noon"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Noon"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Mid-Afternoon?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Mid_Afternoon"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Mid_Afternoon"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Evening?</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Evening"/>
							          Yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false"name="Evening"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>

							<div class="field is-horizontal">
							  <div class="field-label">
							    <label class="label">Bedtime</label>
							  </div>
							  <div class="field-body">
							    <div class="field is-narrow">
							      <div class="control">
							        <label class="radio">
							          <input type="radio" value="true" name="Bedtime"/>
							          yes
							        </label>
							        <label class="radio">
							          <input type="radio" value="false" name="Bedtime"/>
							          No
							        </label>
							      </div>
							    </div>
							  </div>
							</div>
							<br/>

							<div class="field">
								<p class="control">
									<button class="button is-success">
									Submit
									</button>
								</p>
							</div>

							</form>
		                    </div>
		                  </div>
		                </div>    

					</div>

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

module.exports = Form;