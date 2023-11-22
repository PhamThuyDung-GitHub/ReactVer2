import React, { useState } from "react";

const ButtonStyle = () => {
  const [color, setColor] = useState(false);
  const [text, setText] = useState("hello");
  const [border, setBorder] = useState(false);
  const [icon, setIcon] = useState(true);

  return (
    <div>
      <button style={{ "background-color": color ? "red" : "white" }} onClick={() => setColor(!color)}>
        Button Color
      </button>
      <button onClick={() => setText(text === "hello" ? "hi" : "hello")}>{text}</button>
      <button style={{ "border-color": border ? "red" : "white" }} onClick={() => setBorder(!border)}>
        Button Border
      </button>
      <button onClick={() => setIcon(!icon)}>Button icon {icon ? "✓" : "✗"}</button>
    </div>
  );
};

export default ButtonStyle;
