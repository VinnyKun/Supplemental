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
          	<script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>

			<title>
			Supplemental
			</title>

		</head>
		<body>

		<div class="columns">

			<div class="column"></div>
  			<div class="column is-two-thirds">

			<h1>Supplemental!</h1>
			<br/>
			
			<form className="medicine-form" method="POST" action={"/meds/edit/"+ this.props.context.form.id + "?_method=PUT"}>
				
				<div class="field">
					<label class="label">Name</label>
					<p class="control has-icons-left">
						<input class="input" type="name" name="name" defaultValue={this.props.context.form.name}/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Dosage</label>
					<p class="control has-icons-left">
						<input class="input" type="name" name="dosage" defaultValue={this.props.context.form.dosage}/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Instruction</label>
					<p class="control has-icons-left">
						<input class="input" type="name" name="instruction" defaultValue={this.props.context.form.instruction}/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Type</label>
					<p class="control has-icons-left">
						<input class="input" type="name" name="type" defaultValue={this.props.context.form.type}/>
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

				<div class="field">
					<p class="control">
						<button class="button is-success">
						Submit
						</button>
					</p>
				</div>

				</form>
				<br/>

	          <form className="medicine-delete" method="POST" action={"/meds/edit/delete/"+ this.props.context.form.id + "?_method=delete"}>
	           
				<div class="field">
					<p class="control">
						<button class="button is-danger">
						Delete
						</button>
					</p>
				</div>

	          </form>				

          		<br/>
				<a href="/logout"> Logout </a>

			</div>
			<div class="column"></div>
		</div>
		</body>
      </html>
    );
  }
}

module.exports = Form;