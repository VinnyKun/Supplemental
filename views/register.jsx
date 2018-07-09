var React = require("react");
var layout= require('./layout.jsx')

// This login form will be rendered only if the user is not logged in. Because it's a fairly large component (relatively speaking), I've chosen to extract it as its own component rather than embed it in the home component.
class createForm extends React.Component {
  render() {
    return(
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
          <h2>Register!</h2>
          <form action="/users/new" method="POST">
            <input name="email" type="text" placeholder="email" />
            <input name="password" type="password" placeholder="password"/>
            <input type="submit" value="Create"/><br/>
          </form>
          
        </body>

      </html>       
    )
  }
}

module.exports = createForm;