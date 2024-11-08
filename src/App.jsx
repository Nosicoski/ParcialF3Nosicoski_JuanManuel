// src/App.js
import React, { useState } from "react";
import Form from "./Form";
import Card from "./Card";
import './App.css'

const App = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data);
  };

  return (
    <div className="app">
      <h1>Formulario de Información</h1>
      {!submittedData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Card data={submittedData} />
      )}
    </div>
  );
};

export default App;
