var React = require("react");
var layout= require('./layout.jsx')


class Home extends React.Component {
  render() {
    return (
      <layout>
          <h1>Supplemental!</h1>
          <form className="login-form" method="post" action="/login">

            <input name="email" type="text" placeholder="email" />
            <input name="password" type="password" placeholder="password"/>
            <input name="submit" type="submit" />

          </form>

          <br/>
          <p> Not yet a user? </p> 
          <a href="/users/new"> Sign up here </a>
      </layout>
    );
  }
}

module.exports = Home;