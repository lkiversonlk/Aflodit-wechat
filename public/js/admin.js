/**
 * Created by jerry on 3/31/16.
 */

var ImageAuditPanel = require("./components/imgAuditPanel");
var ImagePicker = require("./components/imagePicker");
var React = require("react");
var reactDOM = require("react-dom");

var picker = new ImagePicker();

reactDOM.render(
    <ImageAuditPanel imagePicker={picker}></ImageAuditPanel>,
    document.getElementById("main")
);