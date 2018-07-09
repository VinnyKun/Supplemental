var React = require("react");
var layout= require('./layout.jsx')


class Home extends React.Component {
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

          <div class="column is-half">
          <h1>Supplemental!</h1>
          <form className="login-form" method="post" action="/login">

 
             <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" name="email" type="text" placeholder="Email"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
                <span class="icon is-small is-right">
                  <i class="fas fa-check"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" name="password" type="password" placeholder="Password"/>
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            <div class="field">
              <p class="control">
                <button class="button is-success">
                  Login
                </button>
              </p>
            </div>

          </form>

          <br/>
          <p> Not yet a user? </p> 
          <a href="/users/new"> Sign up here </a>
          </div>

          <div class="column"></div>
        </div>  
        </body>

      </html>

    );
  }
}

module.exports = Home;