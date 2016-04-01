var React = require("react");
var Layout = require("./layout");

var Node = React.createClass({
    render: function () {
        return (
            <Layout title={this.props.title}>
                <div className="weui-row">
                    <div className="weui_panel weui_panel_access">
                        <div className="weui_panel_hd">
                            您想说什么?
                        </div>
                        <div className="weui_cells weui_cells_form">
                            <div className="weui_cell">
                                <div className="weui_cell_bd weui_cell_primary">
                                    <textarea className="weui_textarea" placeholder="请输入您想说的话" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
});

module.exports = Node;