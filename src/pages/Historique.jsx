// src/components/Historique.jsx
import React, { useState } from "react";

function Historique() {
  // Moquer des éléments pour l'historique
  const [historique, setHistorique] = useState([
    { id: 1, expression: "3 + 5", resultat: "8" },
    { id: 2, expression: "10 * 2", resultat: "20" },
    { id: 3, expression: "6 / 2", resultat: "3" },
    { id: 4, expression: "9 - 4", resultat: "5" },
  ]);

  // Fonction pour ajouter un nouvel élément à l'historique
  const ajouterHistorique = () => {
    const nouvelleEntree = {
      id: historique.length + 1, // On génère un ID simple (tu peux utiliser Date.now() pour une valeur plus unique)
      expression: "8 * 2", // Exemple d'expression
      resultat: "16", // Exemple de résultat
    };
    
    // Mettre à jour l'historique
    setHistorique((prev) => [...prev, nouvelleEntree]);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>🕘 Historique des calculs</h3>
      {historique.length === 0 ? (
        <p>Aucun calcul pour l’instant.</p>
      ) : (
        <table border="2" cellPadding="10">
          <thead>
            <tr>
              <th>#</th>
              <th>Expression</th>
              <th>Résultat</th>
            </tr>
          </thead>
          <tbody>
            {historique.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.expression}</td>
                <td>{item.resultat}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Bouton pour ajouter une nouvelle entrée */}
      <button onClick={ajouterHistorique}>Ajouter un calcul</button>
    </div>
  );
}

export default Historique;
