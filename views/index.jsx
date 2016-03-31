var React = require("react");
var Layout = require("./layout");

var Node = React.createClass({
    render: function () {
        return (
            <Layout title={this.props.title}>
                <div>Hello {this.props.name}</div>
            </Layout>
        );
    }
});

module.exports = Node;