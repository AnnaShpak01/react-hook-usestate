import React from "react";

export default function FixedControls(props) {

  const onClickHandler = (id) =>{
    props.changeActive(id);
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100px",
        height: "100px"
      }}
    >
      {props.panels.map(({ id, color }) => (
        <button key={id} onClick={() => onClickHandler(id)}>panel {id} with color {color}</button>
      ))}
    </div>
  );
}