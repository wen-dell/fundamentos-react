import { useState } from "react";
import "./Input.css";

const Input = (props) => {
  const [valor, setValor] = useState("inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div
      className="Input"
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input type="text" value={valor} onChange={quandoMudar} />
    </div>
  );
};

export default Input;
