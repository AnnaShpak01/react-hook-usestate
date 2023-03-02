//import React from 'react';

import React = require("react");

type Props = {
  id:number
  color?: string
}

//interface OnlyClassNameInterface extends React.FC<{className: string}> {}

export default function Panel (props:Props) {
    return (<div className="Panel" style={{ backgroundColor: props.color }} />);
  }