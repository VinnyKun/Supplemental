var React = require("react");


class layout extends React.Component {
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
          {this.props.children}
        </body>

      </html>
    );
  }
}

module.exports = layout;