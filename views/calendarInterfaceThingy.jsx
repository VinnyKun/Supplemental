var React = require("react");
var layout= require('./layout.jsx')


class Home extends React.Component {
  render() {
    return (
      <layout>
          <h1>Supplementalicious!</h1>
      </layout>
    );
  }
}

module.exports = Home;