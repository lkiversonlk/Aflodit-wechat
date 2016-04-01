/**
 * Created by jerry on 4/1/16.
 */

var ImageAuditPanel = require("./components/imgAuditPanel");
var ImagePicker = require("./components/auditImagePicker");
var React = require("react");
var reactDOM = require("react-dom");

var picker = new ImagePicker();

reactDOM.render(
    <ImageAuditPanel imagePicker={picker}></ImageAuditPanel>,
    document.getElementById("main")
);