import React from "react";
import Split from "./composition/Split";
//import Tooltip from "./composition/Tooltip";

/*const firstTooltip = <Tooltip message="tooltip message">ipsum</Tooltip>;
const secondTooltip = (
  <Tooltip message="another tooltip message">officiis</Tooltip>
);*/

function App() {
  const first = "Christine";
  return (
    <main className="App">
      <Split className="left" flexBasis="2">
        Hello {first}, This is the content for the left `Split`. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit
        facere officia?
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate
        suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus
        id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
