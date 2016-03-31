var React = require("react");
var Layout = require("./layout");

var Node = React.createClass({
    render: function () {
        return (
            <Layout title={this.props.title}>
                <div id="main" class="container">
                </div>
                <script src="/dist/admin.js" />
            </Layout>
        )
    }
});

module.exports = Node;