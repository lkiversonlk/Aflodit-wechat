/**
 * Created by jerry on 3/31/16.
 */

var React = require("react");
var ReactDom = require("react-dom");

var ImgViewPanel = require("./components/imgViewPanel");
var ImagePicker = require("./components/viewImagePicker");

//var picker = new ImagePicker();

ReactDom.render(
    <div>
        <div className="row">
            <div className="col-md-6 col-xs-6" style={{padding : 0}}>
                <ImgViewPanel imagePicker={new ImagePicker()}></ImgViewPanel>
            </div>
            <div className="col-md-6 col-xs-6" style={{padding : 0}}>
                <ImgViewPanel imagePicker={new ImagePicker()}></ImgViewPanel>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 col-xs-6" style={{padding : 0}}>
                <ImgViewPanel imagePicker={new ImagePicker()}></ImgViewPanel>
            </div>
            <div className="col-md-6 col-xs-6" style={{padding : 0}}>
                <ImgViewPanel imagePicker={new ImagePicker()}></ImgViewPanel>
            </div>
        </div>
    </div>
    ,
    document.getElementById("main")
);
