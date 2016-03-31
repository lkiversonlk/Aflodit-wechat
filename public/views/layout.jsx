var React = require("react");


var Node = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="initial-scale=1" />
                    <meta name="app-mobile-web-app-capable" content="yes" />
                    <title>
                        {this.props.title}
                    </title>
                    <script src="/lib/react/react.min.js"></script>
                    <script src="/lib/react/react-dom.min.js"></script>
                    <script src="/lib/jquery/dist/jquery.min.js"></script>
                    <script src="/lib/bootstrap/dist/js/bootstrap.min.js"></script>
                    <link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css"></link>
                    <link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap-theme.min.css"></link>
                </head>
                <body>
                    {this.props.children}
                </body>
            </html>
        );
    }
});

module.exports = Node;