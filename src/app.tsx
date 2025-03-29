import React, { useState } from "react";
import AccessibleButton from "./components/AccessibleButton";
import Modal from "./components/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <h1>React A11Y - v0.3</h1>
      <AccessibleButton
        aria-label="Open Modal"
        onClick={() => setIsOpen(true)}
      />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <p>This is an accessible modal!</p>
      </Modal>
    </div>
  );
}

export default App;
