import React from 'react';
import Panel from "./Panel";

type Props = {
  id:number
  color: string
}


export default function RenderPanels({ panels, activeId }: {panels:Props[]; activeId:number})  {
    const copySorted = (arr: Props[]) => {
      return arr.slice().sort((item: { id: number; }) => (item.id === activeId ? -1 : 1));
    };

    var panelsArr = copySorted(panels).map(({ id, color }:Props) => (
      <Panel key={id} id={id} color={color} />
    ));
  
    return <>
    {panelsArr}
    </>
  }