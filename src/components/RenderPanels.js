import React from "react";
import Panel from "./Panel";

export default function RenderPanels(props) {
    const copySorted = arr => {
      return arr.slice().sort(item => (item.id === props.activeId ? -1 : 1));
    };
  
    return copySorted(props.panels).map(({ id, color }) => (
      <Panel key={id} color={color} />
    ));
  }