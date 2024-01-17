import React from "react";

export default function Modal({ open, onClose, children }) {
  const handleClick = (e) => {
    // Prevent event propagation to the backdrop
    e.stopPropagation();
  };

  return (
    // backdrop
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center
        transition-opacity
        ${open ? "visible bg-black/40" : "invisible bg-black/0"}
      `}
    >
      {/* modal content */}
      <div onClick={handleClick}>{children}</div>
    </div>
  );
}
