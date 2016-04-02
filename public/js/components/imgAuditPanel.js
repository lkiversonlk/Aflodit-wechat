var React = require("react");
var ImagePad = require("./imagePad");

var auditOptions = [
    {
        label : "正常",
        level : 2
    },
    {
        label : "比较暴露 (用物品遮挡)",
        level : 3
    },
    {
        label : "暴露 (无衣物,有遮挡)",
        level : 4
    },
    {
        label : "非常暴露 (无衣物,背面)",
        level : 5
    },
    {
        label : "完全暴露 (无衣物,正面)",
        level : 6
    },
    {
        label : "图片尺寸错误 (横向)",
        level : 1
    }
];

var Node = React.createClass({
    getImage : function(){
        $.showLoading("获取情报中...");

        var self = this;
        self.props.imagePicker.getImageId(function(err, result){
            if(err){
                alert("网络错误");
                $.hideLoading();
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

        self.props.imagePicker.judgeImage(self.state.imageId, level, function(err, result){
            if(err){
                alert("评价失败");
            }
            self.getImage();

        });

    },

    deny : function(){
        //send deny
        this.getImage();
    },

    getInitialState : function(){
        return {imageId : "0001"};
    },

    componentDidMount : function(){
        //this.getImage();
    },

    imageClick : function(){
        var self = this;
        var actions = auditOptions.map(function(auditOption){
            return {
                text : auditOption.label,
                onClick : self.setImageLevel.bind(self, auditOption.level)
            }
        });
        $.actions({actions : actions});
    },

    imageOnLoad : function(){
        $.hideLoading();
    },

    imageOnError : function(){
        $.hideLoading();
        this.getImage();
    },

    render : function(){
        return (
            <ImagePad image={this.imgPath()} imageClick={this.imageClick} onLoad={this.imageOnLoad} onError={this.imageOnError}></ImagePad>
        );
    }
});

module.exports = Node;