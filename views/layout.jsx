var React = require("react");


class layout extends React.Component {
  render() {

    return (
      <html>
        <head>
          <title>
            {this.props.title}
          </title>
        </head>
        <body>
          {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = layout;