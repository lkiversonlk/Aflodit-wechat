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
                    <link rel="stylesheet" href="/css/weui.min.css" />
                    <link rel="stylesheet" href="/css/jquery-weui.css" />
                    <link rel="stylesheet" href="/lib/bootstrap/dist/css/bootstrap.min.css" />
                    <script src="/lib/jquery/dist/jquery.min.js"></script>
                    <script src="/js/jquery-weui.js" />
                </head>
                <body>
                    <div class="container">
                        {this.props.children}
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = Node;