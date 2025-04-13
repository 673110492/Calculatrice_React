import React, { useState } from "react";

const Calculatrice = () => {
  const [nombre1, setNombre1] = useState("");
  const [nombre2, setNombre2] = useState("");
  const [resultat, setResultat] = useState(null);
  const [erreur, setErreur] = useState("");

  const handleAddition = () => {
    setErreur("");
    setResultat(parseFloat(nombre1) + parseFloat(nombre2));
  };

  const handleSoustraction = () => {
    setErreur("");
    setResultat(parseFloat(nombre1) - parseFloat(nombre2));
  };

  const handleDivision = () => {
    if (parseFloat(nombre2) === 0) {
      setErreur("Division par zéro impossible.");
      setResultat(null);
    } else {
      setErreur("");
      setResultat(parseFloat(nombre1) / parseFloat(nombre2));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mini Calculatrice</h2>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Nombre 1"
          value={nombre1}
          onChange={(e) => setNombre1(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Nombre 2"
          value={nombre2}
          onChange={(e) => setNombre2(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={handleAddition}>
          Addition (+)
        </button>
        <button className="btn btn-warning me-2" onClick={handleSoustraction}>
          Soustraction (-)
        </button>
        <button className="btn btn-primary" onClick={handleDivision}>
          Division (/)
        </button>
      </div>

      {resultat !== null && (
        <div className="alert alert-info">
          Résultat : <strong>{resultat}</strong>
        </div>
      )}

      {erreur && (
        <div className="alert alert-danger">
          <strong>Erreur : </strong>{erreur}
        </div>
      )}
    </div>
  );
};

export default Calculatrice;
