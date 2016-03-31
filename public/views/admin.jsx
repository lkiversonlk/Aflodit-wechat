var React = require("react");
var Layout = require("./layout");

var Node = React.createClass({
    render: function () {
        return (
            <Layout title={this.props.title}>

            </Layout>
        )
    }
});

module.exports = Node;