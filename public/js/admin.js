/**
 * Created by jerry on 3/31/16.
 */
var React = require("react");
var reactDOM = require("react-dom");

var ImageAuditPanel = require("./components/imgAuditPanel");
var ImagePicker = require("./components/auditImagePicker");


var picker = new ImagePicker();

reactDOM.render(
    <div className="weui_grids">
        <a href="/admin/audit" className="weui_grid js_grid" data-id="audit">
            <div className="weui_grid_icon">
                <img src="/images/icon_nav_toast.png"/>
            </div>
            <p className="weui_grid_label">
                图片审核
            </p>
        </a>
        <a href="/admin/message" className="weui_grid js_grid" data-id="audit">
            <div className="weui_grid_icon">
                <img src="/images/icon_nav_dialog.png"/>
            </div>
            <p className="weui_grid_label">
                联系我们
            </p>
        </a>
    </div>,
    document.getElementById("main")
);