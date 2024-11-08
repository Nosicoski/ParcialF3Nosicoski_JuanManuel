// src/Form.js
import React, { useState } from "react";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(""); 

    
    if (name.length < 3 || name.startsWith(" ")) {
      setError("Por favor chequea que la información sea correcta.");
      return;
    }
    if (email.length < 6) {
      setError("Por favor chequea que la información sea correcta.");
      return;
    }

    
    onSubmit({ name, email });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingresa tu nombre"
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingresa tu email"
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;
