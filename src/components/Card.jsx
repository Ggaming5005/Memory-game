import React from "react";

export default function Card({ item, onClick }) {
  return (
    <div onClick={onClick} className="card">
      <h3>{item}</h3>
    </div>
  );
}
  