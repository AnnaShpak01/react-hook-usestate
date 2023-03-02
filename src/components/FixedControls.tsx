import React from "react";

type PanelType={
  id:number
  color:string
}

type controlsProp = {
  panels:PanelType[]
  changeActive: (id:number) => void
}

export default function FixedControls(props:controlsProp) {

  const onClickHandler = (id:number):void =>{
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