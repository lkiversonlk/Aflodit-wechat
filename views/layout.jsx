var React = require("react");


var Node = React.createClass({
    render: function () {
        return (
            <html>
                <head>
                    <title>
                        {this.props.title}
                    </title>
                </head>
            </html>
        )
    }
});

module.exports = Node;