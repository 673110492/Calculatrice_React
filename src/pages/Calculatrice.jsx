import React from "react";
import { useState } from "react";

const Calculatrice = () => {
  const [nombre1, setnombre1] = useState("");
  const [nombre2, setnombre2] = useState("");
  const [resultat, setresultat] = useState(null);

  const addition = () => {
    setresultat(parseFloat(nombre1) + parseFloat(nombre2));
  };

  const soustraction = () => {
    setresultat(parseFloat(nombre1) - parseFloat(nombre2));
  };

  

  const division = () => {
    setresultat(parseFloat(nombre1) / parseFloat(nombre2));
  };
  return (
    <div>
      <h2 className="mb-4">Mini calculatrice</h2>

      <div class="input-group flex-nowrap">
        <input
          type="number"
          class="form-control"
          placeholder="numbre1"
          aria-label="numbre1"
          aria-describedby="addon-wrapping"
          value={nombre1}
          onChange={(e) => setnombre1(e.target.value)}
        />
      </div>

      <div class="input-group flex-nowrap">
        <input
          type="number"
          class="form-control"
          placeholder="numbre2"
          aria-label="numbre2"
          aria-describedby="addon-wrapping"
          value={nombre2}
          onChange={(e) => setnombre2(e.target.value)}
        />
      </div>
      <button type="button" class="btn btn-primary" onClick={addition}>
        +
      </button>
      <button type="button" class="btn btn-secondary" onClick={soustraction}>
        -
      </button>
      <button type="button" class="btn btn-secondary" onClick={division}>
        /
      </button>
      {resultat!== null && (
        <div className="alert">
            resultat: <strong>{resultat}</strong>
        </div>
      )}
    </div>
  );
};

export default Calculatrice;
