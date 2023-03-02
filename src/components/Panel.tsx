import React from 'react';

export type PanelType = {
  id:number
  color: string
}
export default function Panel (props:PanelType) {
    return (<div className="Panel" style={{ backgroundColor: props.color }} />);
  }