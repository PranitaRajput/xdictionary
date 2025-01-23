import React, { useState } from "react";

const XDictionary = () => {
  const dictionary = [
    { word: "React", meaning: "A JavaScript library for building user interfaces." },
    { word: "Component", meaning: "A reusable building block in React." },
    { word: "State", meaning: "An object that stores data for a component." },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState("");

  const handleSearch = () => {
    const word = dictionary.find(
      (entry) => entry.word.toLowerCase() === searchTerm.toLowerCase()
    );
    setResult(word ? word.meaning : "Word not found in the dictionary.");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>XDictionary</h1>
      <input
        type="text"
        placeholder="Enter a word"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "200px", marginRight: "10px" }}
      />
      <button
        onClick={handleSearch}
        style={{
          padding: "10px 20px",
          //backgroundColor: "#4CAF50",
          color: "black",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>
      <h2>Definition</h2>
      <div style={{ marginTop: "20px", fontSize: "18px", color: "#333" }}>
        {result && <p>{result}</p>}
      </div>
    </div>
  );
};

export default XDictionary;

