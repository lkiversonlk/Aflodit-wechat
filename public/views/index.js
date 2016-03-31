var React = require("react");
var Layout = require("./layout");

var Node = React.createClass({
    render: function () {
        return (
            <Layout title={this.props.title}>
                <div id="main">
                </div>
                <script src="/dist/index.js"></script>
            </Layout>
        );
    }
});

module.exports = Node;