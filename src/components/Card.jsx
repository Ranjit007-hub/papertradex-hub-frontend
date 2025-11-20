import React from "react";
export default function Card({ title, children }) {
  return (
    <div style={{
      border: "1px solid #e1e4e8",
      borderRadius: 8,
      padding: 16,
      background: "#fff",
      boxShadow: "0 1px 3px rgba(15,15,15,0.04)",
      marginBottom: 12
    }}>
      <h3 style={{ margin: "0 0 8px 0", fontSize: 16 }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
}
