import React, {useState} from "react";
import FixedControls from "./FixedControls";
import RenderPanels from "./RenderPanels";
import "../styles/styles.css";

/**
 * Instructions
 *
 * Below you will find panels, and buttons being rendered for each
 * 'panel' described in the intialPanels configuration. Using hooks,
 * adjust the code so that when a button is clicked, the corresponding 'panel'
 * with that id is moved to the top of the rendered panels. You can change as
 * much or as little of the code as you would like to achieve this.
 */

const initialPanels = [
  { id: 0, color: "navy" },
  { id: 1, color: "orange" },
  { id: 2, color: "purple" },
  { id: 3, color: "violet" }
];

export default function App() {

  const [activePanelId, setAcivePanelId] = useState(0);

  const changeActivePanel = (newId) => {
    setAcivePanelId(newId);
  }

  return (
    <div className="App">
      <FixedControls panels={initialPanels}  changeActive={changeActivePanel}  />
      <RenderPanels panels={initialPanels} activeId={activePanelId}/>
    </div>
  );
}

