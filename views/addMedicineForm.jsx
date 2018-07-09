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

			<form className="medicine-form" method="POST" action="/medslist">
				
				<div class="field">
					<label class="label">Name</label>
					<p class="control has-icons-left">
						<input class="input" type="name" placeholder="Medication or Supplement Name"/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Dosage</label>
					<p class="control has-icons-left">
						<input class="input" type="name" placeholder="Dosage in Mgs, Ml,tablets etc"/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Instruction</label>
					<p class="control has-icons-left">
						<input class="input" type="name" placeholder="e.g. Before/After Food"/>
						<span class="icon is-small is-left">
							<i class="fas fa-medkit"></i>
						</span>
					</p>
				</div>

				<div class="field">
					<label class="label">Which Days are the doses required?</label>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Monday</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Monday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Monday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Tuesday</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Tuesday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Tuesday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Wednesay</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Wednesay"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Wednesay"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Thursday</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Thursday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Thursday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Friday</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Friday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Friday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Saturday</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Saturday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Saturday"/>
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
				          <input type="radio" name="Sunday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Sunday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field">
					<label class="label">At which Times of the day are the doses required?</label>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Morning</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Monday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Monday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Noon</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Tuesday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Tuesday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Mid-Afternoon</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Wednesay"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Wednesay"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
				</div>

				<div class="field is-horizontal">
				  <div class="field-label">
				    <label class="label">Evening</label>
				  </div>
				  <div class="field-body">
				    <div class="field is-narrow">
				      <div class="control">
				        <label class="radio">
				          <input type="radio" name="Thursday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Thursday"/>
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
				          <input type="radio" name="Thursday"/>
				          Yes
				        </label>
				        <label class="radio">
				          <input type="radio" name="Thursday"/>
				          No
				        </label>
				      </div>
				    </div>
				  </div>
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