import React from "react";

type ModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
  onClose: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{ background: "rgba(0,0,0,0.5)", padding: "20px" }}
    >
      <div>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
