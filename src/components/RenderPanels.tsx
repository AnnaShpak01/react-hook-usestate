import React from 'react';
import Panel, {PanelType} from "./Panel";

export default function RenderPanels({ panels, activeId }: {panels:PanelType[]; activeId:number})  {
    const copySorted = (arr: PanelType[]) => {
      return arr.slice().sort((item: { id: number; }) => (item.id === activeId ? -1 : 1));
    };

    var panelsArr = copySorted(panels).map(({ id, color }:PanelType) => (
      <Panel key={id} id={id} color={color} />
    ));
  
    return (<>
              {panelsArr}
            </>)
  }