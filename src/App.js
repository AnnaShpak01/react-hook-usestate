import React from "react";
import "./styles.css";

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

function Panel(props) {
  return <div className="Panel" style={{ backgroundColor: props.color }} />;
}

function FixedControls(props) {
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
        <button>panel {id}</button>
      ))}
    </div>
  );
}

function RenderPanels(props) {
  return props.panels.map(({ id, color }) => <Panel key={id} color={color} />);
}

export default function App() {
  return (
    <div className="App">
      <FixedControls panels={initialPanels} />
      <RenderPanels panels={initialPanels} />
    </div>
  );
}

