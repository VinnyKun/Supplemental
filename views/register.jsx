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
          <link rel="shortcut icon" type="image/png" href="/pilly.png"/>
          <script defer src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>

          <title>
            Supplemental
          </title>
        
        </head>
        
        <body>
        
          <section class="hero is-danger is bold">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">  
                  Register
                </h1>
                <h2 class="subtitle">
                  It is Completely Supplementary
                </h2>
              </div>
            </div>
          </section>

          <section class="section">
            <div class="columns">

              <div class="column"></div>

              <div class="column is-two-fifths">

                <img src="/pillbox.png" width='320' height='300'/>

              </div>

              <div class="column"></div>


              <div class="column is-two-fifths">
                <div class="card">
                  <div class="card-content">
                    <div class="content">

                      <form className="login-form" method="post" action="/users/new">
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
                              Register
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
    )
  }
}

module.exports = createForm;