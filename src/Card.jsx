// src/Card.js
import React from "react";

const Card = ({ data }) => {
  return (
    <div className="card">
      <h3>Información Ingresada</h3>
      <p><strong>Nombre:</strong> {data.name}</p>
      <p><strong>Email:</strong> {data.email}</p>
    </div>
  );
};

export default Card;
