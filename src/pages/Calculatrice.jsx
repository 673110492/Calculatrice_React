import React, { useState } from "react";

const CalculatriceScientifique = () => {
  const [input, setInput] = useState("");
  const [resultat, setResultat] = useState(null);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
    setResultat(null);
  };

  const handleCalculate = () => {
    try {
      const finalResult = eval(input); // ⚠️ à sécuriser dans un vrai projet
      setResultat(finalResult);
    } catch (e) {
      setResultat("Erreur");
    }
  };

  const handleScientific = (func) => {
    try {
      let val = parseFloat(input);
      if (isNaN(val)) {
        setResultat("Entrée invalide");
        return;
      }

      let res;
      switch (func) {
        case "sqrt":
          res = Math.sqrt(val);
          break;
        case "log":
          res = Math.log10(val);
          break;
        case "sin":
          res = Math.sin(val);
          break;
        case "cos":
          res = Math.cos(val);
          break;
        case "tan":
          res = Math.tan(val);
          break;
        default:
          res = "Erreur";
      }
      setResultat(res);
    } catch (e) {
      setResultat("Erreur");
    }
  };

  const boutons = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", 0, ".", "/", "^"];

  return (
    <div className="container mt-4">
      <h3>🧠 Calculatrice Scientifique</h3>

      <input
        type="text"
        className="form-control mb-3"
        value={input}
        readOnly
        placeholder="0"
      />

      <div className="row mb-3">
        {boutons.map((btn, index) => (
          <div className="col-3 mb-2" key={index}>
            <button className="btn btn-secondary w-100" onClick={() => handleClick(btn)}>
              {btn}
            </button>
          </div>
        ))}
        <div className="col-6">
          <button className="btn btn-primary w-100" onClick={handleCalculate}>
            =
          </button>
        </div>
        <div className="col-6">
          <button className="btn btn-warning w-100" onClick={handleClear}>
            C
          </button>
        </div>
      </div>

      <div className="row mb-3">
        {["sqrt", "log", "sin", "cos", "tan"].map((func, index) => (
          <div className="col-3 mb-2" key={index}>
            <button className="btn btn-info w-100" onClick={() => handleScientific(func)}>
              {func}
            </button>
          </div>
        ))}
      </div>

      {resultat !== null && (
        <div className="alert alert-success">
          Résultat : <strong>{resultat}</strong>
        </div>
      )}
    </div>
  );
};

export default CalculatriceScientifique;
