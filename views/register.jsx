var React = require("react");
var layout= require('./layout.jsx')

// This login form will be rendered only if the user is not logged in. Because it's a fairly large component (relatively speaking), I've chosen to extract it as its own component rather than embed it in the home component.
class createForm extends React.Component {
  render() {
    return(
      <layout>
      <h2>Register!</h2>
        <form action="/users/new" method="POST">
          <input name="email" type="text" placeholder="email" />
          <input name="password" type="password" placeholder="password"/>
          <input type="submit" value="Create"/><br/>
        </form>
      </layout>  
    )
  }
}

module.exports = createForm;