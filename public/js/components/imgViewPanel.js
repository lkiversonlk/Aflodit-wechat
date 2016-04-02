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
            <ImagePad image={this.imgPath()} imageClick={this.imageClick}></ImagePad>
        );
    }
});

module.exports = Node;