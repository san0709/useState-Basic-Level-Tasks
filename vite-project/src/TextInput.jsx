import React from "react";
import { useState } from "react";

export default function TextInput() {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputText} onChange={handleInputChange} />
      <p>{inputText}</p>
    </div>
  );
}
