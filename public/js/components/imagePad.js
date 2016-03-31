var React = require("react");


var Node = React.createClass({
    render: function () {
        var levels = [];
        for(var i = 0; i < 6; i++){
            levels.push(
                <div className="col-md-2 col-xs-4" key={i}>
                    <input type="radio" />
                    <label className="label label-default">
                        级别{i}
                    </label>
                </div>
            );
        }
        return (
            <div className={this.props.class} >
                <img style={{ width : "100%"}} src={this.props.image} />

                <div className="well">
                    <div className="row">
                        {levels}
                    </div>
                    <div className="row">
                        <button className="btn btn-danger form-control" onClick={this.props.deny}>
                            审核不通过
                        </button>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Node;