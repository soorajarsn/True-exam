import React from "react";
import "../styles/info.scss";
function Info(props) {
  return (
    <div className="info-container-main flex sm-padding sm-padding-left sm-padding-right">
      <div className={"flex justify-start info md-padding lg-padding-left lg-padding-right " + (props.className && props.className)}>
        <div>
          <i className={"fas flex md-margin-right " + props.icon} />
        </div>
        <div>
          <h3 className="sm-smaller md-smaller lg-smaller no-margin">{props.header}</h3>
          <p className="sm-margin">{props.info}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
