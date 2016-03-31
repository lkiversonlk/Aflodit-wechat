/**
 * Created by jerry on 3/31/16.
 */

var React = require("react");
var ReactDom = require("react-dom");

var ImagePad = require("./components/imagePad");

var IndexPage = React.createClass({

    getImage : function(){
        var self = this;
        self.request = $.get("/admin/random", function(result){
            if(result.code == 0){
                self.setState({
                    imageId : result.data
                });
            }
        });
    },

    imgPath : function(){
        return "/cr/pic/" + this.state.imageId;
    },

    approve : function(level){

    },

    deny : function(){
        //send deny
        this.getImage();
    },

    getInitialState : function(){
        return {imageId : "test"};
    },

    componentDidMount : function(){
        this.getImage();
    },

    render : function(){
        return (
            <div className="row">
                <ImagePad className="col-md-12" image={this.imgPath()} deny={this.deny}></ImagePad>,
            </div>
        );
    }
});

ReactDom.render(
    <IndexPage />
    ,
    document.getElementById("main")
);
