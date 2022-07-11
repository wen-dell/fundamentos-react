import "./index.css";
import { createRoot } from "react-dom/client";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Primeiro />
    <ComParametro titulo="Situação do Aluno" aluno="Wendell" nota={9.3} />
  </div>
);
