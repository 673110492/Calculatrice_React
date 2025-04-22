import React, { useState } from "react";
import "../styles/Calculatrice.css";

const New= () => {
  const [input, setInput] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      const res = eval(input).toString();
      setInput(res);
    } catch (error) {
      console.error(error); // Affiche l'erreur dans la console (facultatif)
      setInput("Erreur");
    }
  };

  const handleSin = () => {
    try {
      const radians = parseFloat(input) * (Math.PI / 180); // conversion degrés -> radians
      const result = Math.sin(radians);
      setInput(result.toString());
    } catch (error) {
      console.error(error);
      setInput('Erreur');
    }
  };

  const handleCos = () => {
    try {
      const radians = parseFloat(input) * (Math.PI / 180); // conversion degrés -> radians
      const result = Math.cos(radians);
      setInput(result.toString());
    } catch {
      setInput('Erreur');
    }
  };

  const handleFactorial = () => {
    try {
      const n = parseInt(input); // Convertit l'entrée en entier
      if (isNaN(n) || n < 0) {
        setInput('Erreur'); // Gère les cas invalides
        return;
      }
  
      let result = 1;
      for (let i = 2; i <= n; i++) {
        result *= i;
      }
  
      setInput(result.toString()); // Met à jour le champ avec le résultat
    } catch {
      setInput('Erreur');
    }
  };
  
  const handlePercentage = () => {
    try {
      const value = parseFloat(input);  // Prend la valeur entrée
      const result = value / 100; // Calcul du pourcentage
      setInput(result.toString());  // Affiche le résultat dans le champ
    } catch {
      setInput('Erreur');  // En cas d'erreur
    }
  };
  const handleSqrt = () => {
    try {
      const value = parseFloat(input);
      if (value < 0 || isNaN(value)) {
        setInput('Erreur');
        return;
      }
      const result = Math.sqrt(value);
      setInput(result.toString());
    } catch {
      setInput('Erreur');
    }
  };
  
  return (
    <div className={`calculatrice ${darkMode ? "dark" : "light"}`}>
      <div className="mode-toggle">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="screen">{input || "0"}</div>

      <div className="buttons">
<button onClick={handleFactorial}> !</button>
<button onClick={handleDelete}> DEL</button>
<button onClick={handleSin}> sin</button>
<button onClick={handleCos}> COS</button>

<button onClick={handleClear}>C</button>
 <button onClick={() => handleClick("/")}>/</button>
 <button onClick={handlePercentage}>%</button>
 <button onClick={() => handleClick("9")}>7</button>

 <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>

        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>

        <button onClick={() => handleClick("2")}>1</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("*")}>x</button>

  
<button onClick={() => handleClick("0")} className="zero">0</button>
<button onClick={() => handleClick(".")}>.</button>
<button className="equal" onClick={handleEqual}>=</button>
<button onClick={handleSqrt}>√</button>

      
      </div>
    </div>
  );
};

export default New;
