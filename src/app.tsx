import React from "react";
import withA11y from "./hocs/withA11y";

const Button = withA11y((props: any) => <button {...props}>Click Me</button>);

function App() {
  return (
    <div>
      <h1>React A11Y - v0.1</h1>
      <Button aria-label="Accessible Button" />
    </div>
  );
}

export default App;
