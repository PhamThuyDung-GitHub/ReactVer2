import React, { useState } from "react";

const TextInput = () => {
  const [input, setInput] = useState("");

  return (
    <div>
      {input}
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
};

export default TextInput;
