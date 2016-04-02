/**
 * Created by jerry on 3/31/16.
 */
var React = require("react");
var ImagePad = require("./imagePad");

var Node = React.createClass({
    getImage : function(){
        var self = this;
        self.props.imagePicker.getImageId(function(err, result){
            if(err){
                alert("网络错误");
            }else{
                self.setState({
                    imageId : result
                })
            }
        });
    },

    imgPath : function(){
        return this.props.imagePicker.getImagePath(this.state.imageId);
    },

    setImageLevel : function(level){
        //post image level
        var self = this;
        $.showLoading("评价中..拉取下一张图");
        self.props.imagePicker.judgeImage(self.state.imageId, level, function(err, result){
            if(err){
                alert("评价失败");
            }
            self.getImage();
            $.hideLoading();
        });

    },

    getInitialState : function(){
        return {imageId : "0000"};
    },

    componentDidMount : function(){
        //this.getImage();
    },

    imageClick : function(){
        var self = this;
        self.getImage();
    },

    render : function(){
        return (
            <div className="weui_tab">
                <div className="weui_tab_bd">
                    <ImagePad image={this.imgPath()} imageClick={this.imageClick}></ImagePad>
                </div>
                <div className="weui_tabbar">
                    <a className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_noti.png" />
                        </div>
                        <p className="weui_tabbar_label">
                            差劲
                        </p>
                    </a>
                    <a className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_button.png" />
                        </div>
                        <p className="weui_tabbar_label">
                            一般
                        </p>
                    </a>
                    <a className="weui_tabbar_item">
                        <div className="weui_tabbar_icon">
                            <img src="/images/icon_nav_msg.png" />
                        </div>
                        <p className="weui_tabbar_label">
                            好棒
                        </p>
                    </a>
                </div>
            </div>
        );
    }
});

module.exports = Node;