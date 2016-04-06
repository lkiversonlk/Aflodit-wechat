/**
 * Created by jerry on 3/31/16.
 */
var React = require("react");
var ImagePad = require("./imagePad");

var Node = React.createClass({
    getImage : function(){
        $.showLoading("搜寻情报中...");

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
        return {imageId : null};
    },

    componentDidMount : function(){
        this.getImage();
    },

    imageClick : function(){
        var self = this;
        var stay = Date.now() - self.imageLoadTime;
        $.post(
            "/stat/image/" + self.state.imageId
            , {
                stay : stay,
                type : "view",
                user : userId
            }
            , function (){}
        );
        self.getImage();
    },

    imageLoad : function(){
        $.hideLoading();
        this.imageLoadTime = Date.now();
    },

    imageError : function(){
        $.hideLoading();
        this.getImage();
    },

    buttonClick : function(prefer){
        //alert("bad");
        var self = this;
        if(self.state.imageId != "0000"){
            var stay = Date.now() - self.imageLoadTime;
            $.post(
                "/stat/image/" + self.state.imageId
                , {
                    prefer : prefer,
                    stay : stay,
                    type : "view",
                    user : userId
                }
                , function (){}
            );
        }
        self.getImage();
    },

    render : function(){
        return (
            <div className="weui_tab">
                <div className="weui_tab_bd">
                    <ImagePad image={this.imgPath()} imageClick={this.imageClick} onLoad={this.imageLoad} onError={this.imageError}></ImagePad>
                </div>
            </div>
        );
    }
});

module.exports = Node;