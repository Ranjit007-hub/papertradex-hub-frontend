import React from "react";
export default function SimpleButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 12px",
        borderRadius: 6,
        border: "1px solid #0366d6",
        background: "#0366d6",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      {children}
    </button>
  );
}
