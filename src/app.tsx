import React, { useState } from "react";
import { useKeyboardNavigation } from "./hooks/useKeyboardNavigation";

function App() {
  const [message, setMessage] = useState("Use arrow keys!");

  useKeyboardNavigation((event) => {
    setMessage(`Pressed: ${event.key}`);
  });

  return (
    <div>
      <h1>React A11Y - v0.2</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
